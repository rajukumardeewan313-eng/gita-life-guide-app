import React, { useState } from 'react';
import { Download, BookOpen, Volume2, VolumeX, Info, BookMarked } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { LanguageSelector } from './LanguageSelector';
import { LanguageCode } from '../data/languages';
import { getTranslation } from '../i18n/translations';

interface HeaderProps {
  onOpenInfo: () => void;
  onOpenVoiceTest: () => void;
  onOpenChapterSelector: () => void;
  activeAudio: boolean;
  onStopAllAudio: () => void;
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenInfo,
  onOpenVoiceTest,
  onOpenChapterSelector,
  activeAudio,
  onStopAllAudio,
  currentLanguage,
  onLanguageChange,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);
  const t = getTranslation(currentLanguage);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#070b19]/90 backdrop-blur-md border-b border-amber-500/20 px-3 sm:px-4 py-2.5 sm:py-3 transition-all">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Logo & Spiritual Title */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-amber-600/30 to-amber-950/40 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.2)] shrink-0">
              <span className="text-lg sm:text-xl font-sanskrit text-amber-300 font-bold select-none">ॐ</span>
              <div className="absolute inset-0 rounded-xl shimmer-gold pointer-events-none opacity-40" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-serif-sacred text-sm sm:text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">
                  {t.appTitle}
                </h1>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  {t.verifiedBadge}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-amber-200/70 tracking-wider truncate max-w-[180px] sm:max-w-none">
                {t.appSubtitle}
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Audio Playing Global indicator & stop button */}
            {activeAudio && (
              <button
                onClick={onStopAllAudio}
                className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] sm:text-xs font-medium animate-pulse hover:bg-amber-500/30 transition shrink-0"
                title={t.stopButton}
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden xs:inline">{t.audioPlaying}</span>
                <VolumeX className="w-3 h-3 ml-0.5" />
              </button>
            )}

            {/* Chapter & Verse Selector Icon */}
            <button
              onClick={onOpenChapterSelector}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-amber-300 hover:text-amber-100 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition flex items-center gap-1.5 text-xs font-medium shadow-sm"
              title={t.openChapterSelector}
              aria-label={t.chapterVerseSelectorTitle}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden md:inline text-[11px] font-medium">{t.allChaptersHeader}</span>
            </button>

            {/* PWA Install Button (Android / Chromium) */}
            {isInstallable && !isInstalled && (
              <button
                onClick={install}
                className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-semibold shadow-md shadow-amber-500/20 transition transform active:scale-95"
                title={t.installApp}
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.installApp}</span>
              </button>
            )}

            {/* iOS Safari PWA Prompt Button */}
            {isIOS && !isInstalled && (
              <button
                onClick={() => setShowIOSPrompt(true)}
                className="flex items-center gap-1 px-2 py-1 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-medium transition"
              >
                <Download className="w-3 h-3" />
                <span>Install</span>
              </button>
            )}

            {/* Language Selector Dropdown */}
            <LanguageSelector
              compact={true}
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />

            {/* Voice Diagnostics & Test Modal Trigger */}
            <button
              onClick={onOpenVoiceTest}
              className="p-1.5 rounded-lg text-amber-300 hover:text-amber-200 hover:bg-amber-500/15 border border-amber-500/20 hover:border-amber-500/40 transition flex items-center gap-1 text-xs"
              title={t.testVoice}
              aria-label={t.testVoice}
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden lg:inline text-[11px] font-medium">{t.testVoice}</span>
            </button>

            {/* About / Integrity Info Modal Trigger */}
            <button
              onClick={onOpenInfo}
              className="p-1.5 rounded-lg text-amber-200/70 hover:text-amber-200 hover:bg-amber-500/10 border border-transparent hover:border-amber-500/20 transition"
              title={t.aboutScripture}
              aria-label={t.aboutScripture}
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* iOS Safari Installation Guide Modal */}
      {showIOSPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#0f172a] border border-amber-500/30 p-6 shadow-2xl text-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📲</span>
              <h3 className="font-serif-sacred text-base font-bold text-amber-300">
                Install on iPhone / iPad
              </h3>
            </div>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Experience Gita Life Guide full-screen offline:
            </p>
            <ol className="text-xs text-slate-300 space-y-2.5 list-decimal list-inside bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <li>
                Tap the <strong className="text-amber-300">Share button</strong> in Safari’s bottom bar.
              </li>
              <li>
                Scroll down and select <strong className="text-amber-300">Add to Home Screen</strong>.
              </li>
              <li>
                Tap <strong className="text-amber-300">Add</strong> in the top-right corner.
              </li>
            </ol>
            <button
              onClick={() => setShowIOSPrompt(false)}
              className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-xs shadow-md transition hover:from-amber-400 hover:to-amber-500"
            >
              {t.closeModal}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
