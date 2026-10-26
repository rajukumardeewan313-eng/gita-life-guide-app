import React from 'react';
import { X, Volume2, VolumeX, Sparkles, CheckCircle2, Server, Cpu, Loader2 } from 'lucide-react';
import { LanguageCode, SUPPORTED_LANGUAGES } from '../data/languages';
import { VoiceStatus } from '../hooks/useTextToSpeech';

interface VoiceTestingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTestVoice: (lang: LanguageCode) => void;
  onStopAudio: () => void;
  isSpeaking: boolean;
  isLoadingAudio: boolean;
  currentAudioId: string | null;
  getVoiceStatus: (lang: LanguageCode) => VoiceStatus;
}

export const VoiceTestingModal: React.FC<VoiceTestingModalProps> = ({
  isOpen,
  onClose,
  onTestVoice,
  onStopAudio,
  isSpeaking,
  isLoadingAudio,
  currentAudioId,
  getVoiceStatus,
}) => {
  if (!isOpen) return null;

  const languages = Object.values(SUPPORTED_LANGUAGES);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="w-full max-w-xl rounded-3xl bg-[#0f172a] border border-amber-500/30 p-5 sm:p-6 shadow-2xl text-slate-100 space-y-4 my-auto max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Volume2 className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="font-serif-sacred text-base font-bold text-amber-200">
                Multilingual Voice Output Diagnostic
              </h3>
              <p className="text-[11px] text-amber-400/80">
                Browser Voices & Server Neural TTS Provider
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              onStopAudio();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Explanation Note */}
        <div className="p-3 rounded-2xl bg-slate-900/80 border border-amber-500/20 text-xs text-slate-300 leading-relaxed space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Hybrid Voice Architecture</span>
          </div>
          <p>
            When an installed browser voice is available on your device, it speaks instantly. If your operating system lacks a voice for a specific language (common for Sindhi, Urdu, or Gujarati), Gita Life Guide automatically uses our secure server-side neural TTS provider so you receive authentic, natural pronunciation in all six languages.
          </p>
        </div>

        {/* List of 6 Languages with Voice Tests */}
        <div className="space-y-3 pt-1">
          {languages.map((lang) => {
            const status = getVoiceStatus(lang.code);
            const testKey = `test-voice-${lang.code}`;
            const isThisPlaying = isSpeaking && currentAudioId === testKey;
            const isThisLoading = isLoadingAudio && currentAudioId === testKey;
            const isRTL = lang.direction === 'rtl';

            return (
              <div
                key={lang.code}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 p-3.5 sm:p-4 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1.5 flex-1">
                  {/* Language Title & Provider Badge */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-serif-sacred text-xs sm:text-sm font-bold text-amber-200">
                      {lang.nativeName}
                    </span>
                    <span className="text-[11px] text-slate-400">({lang.name})</span>

                    {/* Active Provider Tag */}
                    {status.provider === 'browser' ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        <Cpu className="w-3 h-3 text-emerald-400" />
                        <span>Browser Voice</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        <Server className="w-3 h-3 text-amber-400" />
                        <span>AI Neural Voice</span>
                      </span>
                    )}
                  </div>

                  {/* Test Sentence in Native Script */}
                  <div
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className={`text-xs text-slate-200 bg-black/30 p-2 rounded-xl border border-slate-800/80 leading-relaxed ${
                      lang.code === 'ur' ? 'font-urdu' : lang.code === 'sd' ? 'font-sindhi' : ''
                    }`}
                  >
                    "{lang.testSentence}"
                  </div>

                  {/* Engine detail info */}
                  <div className="text-[10px] text-slate-400 truncate">
                    {status.provider === 'browser' ? (
                      <span>Engine: {status.voiceName}</span>
                    ) : (
                      <span>Remote provider: Gemini 3.8 Flash-Lite Speech Engine</span>
                    )}
                  </div>
                </div>

                {/* Test Voice Button */}
                <div className="sm:self-center shrink-0">
                  <button
                    onClick={() => {
                      if (isThisPlaying) {
                        onStopAudio();
                      } else {
                        onTestVoice(lang.code);
                      }
                    }}
                    disabled={isThisLoading}
                    className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition shadow-sm ${
                      isThisPlaying
                        ? 'bg-rose-500 text-white animate-pulse hover:bg-rose-600'
                        : isThisLoading
                        ? 'bg-slate-800 text-amber-300 border border-amber-500/30 cursor-wait'
                        : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 active:scale-95'
                    }`}
                  >
                    {isThisLoading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-300" />
                        <span>Loading...</span>
                      </>
                    ) : isThisPlaying ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>Stop Voice</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Test Voice</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => {
              onStopAudio();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
