import React from 'react';
import { X, ShieldCheck, BookOpen, Mic, Volume2, Globe, Smartphone, Languages } from 'lucide-react';
import { LanguageCode } from '../data/languages';
import { LanguageSelector } from './LanguageSelector';
import { getTranslation } from '../i18n/translations';
import { SUPPORTED_LANGUAGES } from '../data/languages';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  onOpenVoiceTest?: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onLanguageChange,
  onOpenVoiceTest,
}) => {
  if (!isOpen) return null;
  const t = getTranslation(currentLanguage);
  const langConfig = SUPPORTED_LANGUAGES[currentLanguage];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 overflow-y-auto"
      dir={langConfig.direction}
    >
      <div className="w-full max-w-lg rounded-3xl bg-[#0f172a] border border-amber-500/30 p-6 shadow-2xl text-slate-100 space-y-5 my-auto max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold">
              ॐ
            </div>
            <div>
              <h3 className="font-serif-sacred text-base font-bold text-amber-200">
                {t.appTitle}
              </h3>
              <p className="text-[11px] text-amber-400/80">{t.appSubtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            aria-label={t.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Selection in Settings */}
        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-amber-500/25 space-y-2.5">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs">
            <Languages className="w-4 h-4 text-amber-400" />
            <span>{t.languageSelectLabel}</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Select your preferred language. Speech recognition, AI guidance, URLs, and voice output will immediately synchronize across the entire website.
          </p>
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
            compact={false}
          />
          {onOpenVoiceTest && (
            <button
              onClick={() => {
                onClose();
                onOpenVoiceTest();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-semibold transition"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{t.testVoice}</span>
            </button>
          )}
        </div>

        {/* Scriptural Integrity & Principles */}
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t.aboutScripture}</span>
            </div>
            <p>
              This educational guide is built with strict adherence to authentic Bhagavad Gita scripture (all 18 chapters and 700 verses). We never invent verses or concoct fictional citations. Every reference clearly indicates the exact Chapter and Verse.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100 block">6 Supported Languages & Localized URLs</strong>
                English (`en`), Urdu (`ur`), Hindi (`hi`), Sindhi (`sd`), Tamil (`ta`), and Gujarati (`gu`). Localized URL routing preserves chapter and verse state seamlessly across all pages.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Volume2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100 block">Full Audio Controls & Speech Synthesis</strong>
                Complete Play, Pause, Resume, and Stop controls in all 6 languages using native browser voices and server-side neural voice generation.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Smartphone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-100 block">Offline Capability (PWA)</strong>
                Install as a standalone Android app or desktop application. All core scriptures, chapter catalog, and saved bookmarks remain available offline.
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
        >
          {t.closeModal}
        </button>
      </div>
    </div>
  );
};
