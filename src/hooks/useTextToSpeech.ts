import { useState, useEffect, useCallback, useRef } from 'react';
import { LanguageCode, SUPPORTED_LANGUAGES } from '../data/languages';

export interface VoiceStatus {
  language: LanguageCode;
  provider: 'browser' | 'server' | 'none';
  voiceName?: string;
  isAvailable: boolean;
  notes?: string;
}

export function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [currentProvider, setCurrentProvider] = useState<'browser' | 'server' | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const serverAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize and poll for browser voices (Chromium/Safari asynchronous voice loading)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('speechSynthesis' in window) {
      setIsSupported(true);

      const logAndSetVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          setAvailableVoices(voices);
        }
      };

      logAndSetVoices();

      // Listen for voiceschanged event
      window.speechSynthesis.onvoiceschanged = logAndSetVoices;

      // Poll every 300ms for first 2 seconds in case voiceschanged is delayed
      const intervals = [200, 500, 1000, 2000];
      const timerIds = intervals.map((delay) => setTimeout(logAndSetVoices, delay));

      return () => {
        timerIds.forEach(clearTimeout);
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
        if (serverAudioRef.current) {
          serverAudioRef.current.pause();
          serverAudioRef.current = null;
        }
      };
    } else {
      setIsSupported(false);
    }
  }, []);

  // Stop both browser speechSynthesis and any playing server audio
  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (serverAudioRef.current) {
      try {
        serverAudioRef.current.pause();
        serverAudioRef.current.currentTime = 0;
      } catch (_) {}
      serverAudioRef.current = null;
    }
    setIsSpeaking(false);
    setIsPaused(false);
    setIsLoadingAudio(false);
    setCurrentId(null);
    setCurrentProvider(null);
  }, []);

  // Pause current playback
  const pause = useCallback(() => {
    if (currentProvider === 'browser' && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (currentProvider === 'server' && serverAudioRef.current) {
      serverAudioRef.current.pause();
      setIsPaused(true);
    }
  }, [currentProvider]);

  // Resume paused playback
  const resume = useCallback(() => {
    if (currentProvider === 'browser' && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else if (currentProvider === 'server' && serverAudioRef.current) {
      serverAudioRef.current.play().catch((e) => console.warn('Failed to resume server audio', e));
      setIsPaused(false);
    }
  }, [currentProvider]);

  // Browser voice matching algorithm (strict: never match English for non-English)
  const findMatchingBrowserVoice = useCallback(
    (langCode: LanguageCode, locale: string): SpeechSynthesisVoice | null => {
      const voices =
        availableVoices.length > 0
          ? availableVoices
          : typeof window !== 'undefined' && 'speechSynthesis' in window
          ? window.speechSynthesis.getVoices()
          : [];

      if (voices.length === 0) return null;

      const normLocale = locale.toLowerCase().replace('_', '-');
      const targetPrefix = langCode.toLowerCase();

      // 1. Exact locale match (e.g., 'ur-PK' or 'hi-IN')
      const exact = voices.find((v) => v.lang.toLowerCase().replace('_', '-') === normLocale);
      if (exact) return exact;

      // 2. Prefix match (e.g., language code is 'hi' and voice.lang is 'hi-IN')
      const prefixMatch = voices.find((v) => {
        const vLang = v.lang.toLowerCase().replace('_', '-');
        return vLang === targetPrefix || vLang.startsWith(`${targetPrefix}-`);
      });
      if (prefixMatch) return prefixMatch;

      // 3. Name check (e.g. voice labeled 'Hindi' or 'Tamil')
      const nameMatch = voices.find((v) => {
        const n = v.name.toLowerCase();
        if (langCode === 'hi' && (n.includes('hindi') || n.includes('हिन्दी'))) return true;
        if (langCode === 'ur' && (n.includes('urdu') || n.includes('اردو'))) return true;
        if (langCode === 'ta' && (n.includes('tamil') || n.includes('தமிழ்'))) return true;
        if (langCode === 'gu' && (n.includes('gujarati') || n.includes('ગુજરાતી'))) return true;
        if (langCode === 'sd' && (n.includes('sindhi') || n.includes('سنڌي'))) return true;
        if (langCode === 'en' && (n.includes('english') || v.lang.toLowerCase().startsWith('en'))) return true;
        return false;
      });

      if (nameMatch) return nameMatch;

      return null;
    },
    [availableVoices]
  );

  // Get current voice status for any language
  const getVoiceStatus = useCallback(
    (langCode: LanguageCode): VoiceStatus => {
      const cfg = SUPPORTED_LANGUAGES[langCode] || SUPPORTED_LANGUAGES.en;
      const browserVoice = findMatchingBrowserVoice(langCode, cfg.speechLocale);

      if (browserVoice) {
        return {
          language: langCode,
          provider: 'browser',
          voiceName: `${browserVoice.name} (${browserVoice.lang})`,
          isAvailable: true,
          notes: 'Native browser speech voice installed on this device',
        };
      }

      // If no browser voice, server-side Gemini TTS handles all 6 languages
      return {
        language: langCode,
        provider: 'server',
        voiceName: `AI Neural Voice (${cfg.name})`,
        isAvailable: true,
        notes: 'High-fidelity neural voice provider',
      };
    },
    [findMatchingBrowserVoice]
  );

  // Play audio from server-side TTS API
  const speakWithServerTTS = useCallback(
    async (cleanedText: string, id: string, language: LanguageCode) => {
      setIsLoadingAudio(true);
      setError(null);

      try {
        const response = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: cleanedText,
            language,
          }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || `Server TTS request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (!data.audio) {
          // If server TTS is in standby, fallback to default browser synthesis if available
          if ('speechSynthesis' in window) {
            const fallbackUtterance = new SpeechSynthesisUtterance(cleanedText);
            fallbackUtterance.rate = 0.95;
            fallbackUtterance.onstart = () => {
              setIsSpeaking(true);
              setIsPaused(false);
              setCurrentId(id);
              setCurrentProvider('browser');
            };
            fallbackUtterance.onend = () => {
              setIsSpeaking(false);
              setIsPaused(false);
              setCurrentId(null);
              setCurrentProvider(null);
            };
            fallbackUtterance.onerror = () => {
              setIsSpeaking(false);
              setIsPaused(false);
              setCurrentId(null);
              setCurrentProvider(null);
            };
            window.speechSynthesis.speak(fallbackUtterance);
            return;
          }
          setIsLoadingAudio(false);
          return;
        }

        // Construct HTML5 Audio from base64 WAV payload
        const audioSrc = `data:${data.mimeType || 'audio/wav'};base64,${data.audio}`;
        const audio = new Audio(audioSrc);
        serverAudioRef.current = audio;

        audio.onplay = () => {
          setIsLoadingAudio(false);
          setIsSpeaking(true);
          setIsPaused(false);
          setCurrentId(id);
          setCurrentProvider('server');
        };

        audio.onpause = () => {
          if (!audio.ended && audio.currentTime > 0) {
            setIsPaused(true);
          }
        };

        audio.onended = () => {
          setIsSpeaking(false);
          setIsPaused(false);
          setIsLoadingAudio(false);
          setCurrentId(null);
          setCurrentProvider(null);
          serverAudioRef.current = null;
        };

        audio.onerror = () => {
          setError('Audio playback note: Written guidance remains visible above.');
          setIsSpeaking(false);
          setIsPaused(false);
          setIsLoadingAudio(false);
          setCurrentId(null);
          setCurrentProvider(null);
          serverAudioRef.current = null;
        };

        await audio.play();
      } catch (err: any) {
        console.log('[Gita TTS] Speech playback note:', err?.message || err);
        setIsSpeaking(false);
        setIsPaused(false);
        setIsLoadingAudio(false);
        setCurrentId(null);
        setCurrentProvider(null);
      }
    },
    []
  );

  // Main speak function: selects browser voice if available, otherwise seamlessly uses server TTS
  const speak = useCallback(
    async (textToSpeak: string, id: string, language: LanguageCode = 'en') => {
      // 1. Always stop any currently playing speech before starting another
      stop();
      setError(null);

      const langConfig = SUPPORTED_LANGUAGES[language] || SUPPORTED_LANGUAGES.en;

      // Clean text: strip markdown bullets, headers, brackets
      const cleanedText = textToSpeak
        .replace(/[*#_~`>]/g, '')
        .replace(/\[.*?\]/g, '')
        .replace(/\n\s*\n/g, '. ')
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      if (!cleanedText) return;

      const matchedBrowserVoice = findMatchingBrowserVoice(language, langConfig.speechLocale);

      // Path A: Compatible browser voice is installed
      if (matchedBrowserVoice && 'speechSynthesis' in window) {
        try {
          const utterance = new SpeechSynthesisUtterance(cleanedText);
          utteranceRef.current = utterance;
          utterance.lang = langConfig.speechLocale;
          utterance.voice = matchedBrowserVoice;
          utterance.rate = 0.94;
          utterance.pitch = 1.0;

          utterance.onstart = () => {
            setIsSpeaking(true);
            setIsPaused(false);
            setCurrentId(id);
            setCurrentProvider('browser');
          };

          utterance.onend = () => {
            setIsSpeaking(false);
            setIsPaused(false);
            setCurrentId(null);
            setCurrentProvider(null);
          };

          utterance.onerror = (e) => {
            console.warn('Browser SpeechSynthesis error:', e);
            if (e.error !== 'interrupted' && e.error !== 'canceled') {
              console.log('[Gita TTS] Browser voice failed, falling back to server TTS provider');
              speakWithServerTTS(cleanedText, id, language);
            } else {
              setIsSpeaking(false);
              setIsPaused(false);
              setCurrentId(null);
              setCurrentProvider(null);
            }
          };

          window.speechSynthesis.speak(utterance);
          return;
        } catch (browserErr) {
          console.warn('[Gita TTS] SpeechSynthesis exception, falling back to server TTS', browserErr);
        }
      }

      // Path B: No compatible browser voice installed (or failed) -> Use remote Server-Side TTS Provider
      await speakWithServerTTS(cleanedText, id, language);
    },
    [findMatchingBrowserVoice, speakWithServerTTS, stop]
  );

  // Test voice helper function
  const testVoice = useCallback(
    async (language: LanguageCode) => {
      const cfg = SUPPORTED_LANGUAGES[language] || SUPPORTED_LANGUAGES.en;
      const testId = `test-voice-${language}`;
      await speak(cfg.testSentence, testId, language);
    },
    [speak]
  );

  return {
    isSpeaking,
    isPaused,
    isLoadingAudio,
    currentId,
    currentProvider,
    isSupported,
    error,
    availableVoices,
    speak,
    pause,
    resume,
    stop,
    testVoice,
    getVoiceStatus,
    clearError: () => setError(null),
  };
}
