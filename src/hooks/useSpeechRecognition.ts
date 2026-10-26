import { useState, useEffect, useRef, useCallback } from 'react';
import { LanguageCode, SUPPORTED_LANGUAGES } from '../data/languages';

// SpeechRecognition type declarations for browser support
interface IWindow extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export function useSpeechRecognition(selectedLanguage: LanguageCode = 'en') {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef<any>(null);
  const langConfig = SUPPORTED_LANGUAGES[selectedLanguage] || SUPPORTED_LANGUAGES.en;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const win = window as unknown as IWindow;
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (SpeechRecognitionClass) {
      setIsSupported(true);
      const recognition = new SpeechRecognitionClass();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = langConfig.speechLocale;

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition event error:', event.error);
        if (event.error === 'not-allowed') {
          setError('Microphone permission denied. You can still type your question below.');
        } else if (event.error === 'language-not-supported' || event.error === 'bad-grammar') {
          setError(
            `Speech recognition for ${langConfig.name} (${langConfig.nativeName} - ${langConfig.speechLocale}) is not supported on this browser or device. Please type your question directly in the text box below.`
          );
        } else if (event.error === 'no-speech') {
          setError('No voice detected. Please speak clearly or type your question.');
        } else if (event.error === 'network') {
          setError('Speech network timeout. Please check connection or type your question.');
        } else {
          setError(
            `Voice input message (${event.error}). You can type your question in ${langConfig.name} (${langConfig.nativeName}) below.`
          );
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } else {
      setIsSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (_) {}
      }
    };
  }, [langConfig.speechLocale, langConfig.name, langConfig.nativeName]);

  const startListening = useCallback(() => {
    setError(null);
    if (!recognitionRef.current) {
      setError(
        `Voice recognition is not supported in this browser. You can type freely in ${langConfig.name} (${langConfig.nativeName}).`
      );
      return;
    }
    try {
      recognitionRef.current.lang = langConfig.speechLocale;
      recognitionRef.current.start();
    } catch (e: any) {
      // If already started or throwing an exception, stop and retry
      try {
        recognitionRef.current.stop();
        setTimeout(() => {
          try {
            recognitionRef.current.lang = langConfig.speechLocale;
            recognitionRef.current.start();
          } catch (err2) {
            console.warn('Could not restart recognition', err2);
          }
        }, 150);
      } catch (_) {}
    }
  }, [langConfig.speechLocale, langConfig.name, langConfig.nativeName]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (_) {}
    }
    setIsListening(false);
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript('');
    setError(null);
  }, []);

  return {
    isListening,
    transcript,
    error,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
  };
}
