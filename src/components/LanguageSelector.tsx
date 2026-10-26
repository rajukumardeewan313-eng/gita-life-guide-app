import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { LanguageCode, SUPPORTED_LANGUAGES } from '../data/languages';

interface LanguageSelectorProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeLang = SUPPORTED_LANGUAGES[currentLanguage] || SUPPORTED_LANGUAGES.en;

  const languagesList = Object.values(SUPPORTED_LANGUAGES);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: LanguageCode) => {
    onLanguageChange(code);
    setIsOpen(false);
  };

  if (compact) {
    return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-medium transition shadow-sm"
          title="Change language"
          aria-label="Select Language"
        >
          <Globe className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-semibold">{activeLang.nativeName}</span>
          <ChevronDown className={`w-3 h-3 text-amber-400/80 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-1.5 w-48 rounded-xl bg-[#0f172a] border border-amber-500/30 shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95">
            <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400/70 border-b border-slate-800">
              Select Language / زبان
            </div>
            {languagesList.map((lang) => {
              const isSelected = lang.code === currentLanguage;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-300 font-semibold'
                      : 'text-slate-200 hover:bg-slate-800/80 hover:text-amber-200'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-100">{lang.nativeName}</span>
                    <span className="text-[10px] text-slate-400">{lang.name}</span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Expanded UI for Assistant screen & settings
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <label className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
          <Globe className="w-3.5 h-3.5 text-amber-400" />
          <span>Language for Voice & Guidance:</span>
        </label>
        <span className="text-[10px] text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-full border border-slate-700/60">
          Auto-saved
        </span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
        {languagesList.map((lang) => {
          const isSelected = lang.code === currentLanguage;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => onLanguageChange(lang.code)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all ${
                isSelected
                  ? 'bg-gradient-to-b from-amber-500/25 to-amber-600/15 border-amber-400 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.25)] font-bold scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-amber-500/30 hover:bg-slate-800/60'
              }`}
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {lang.nativeName}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 font-normal">
                {lang.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
