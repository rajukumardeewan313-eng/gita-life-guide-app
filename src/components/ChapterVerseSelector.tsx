import React, { useState, useMemo } from 'react';
import { BookOpen, Search, X, ChevronRight, ChevronLeft, ArrowRight, Check, Hash } from 'lucide-react';
import { LanguageCode, SUPPORTED_LANGUAGES } from '../data/languages';
import { GITA_CHAPTERS, ChapterInfo, getChapterByNumber } from '../data/chaptersData';
import { getTranslation } from '../i18n/translations';

interface ChapterVerseSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: LanguageCode;
  selectedChapter: number;
  selectedVerse: number;
  onSelectChapterAndVerse: (chapter: number, verse: number) => void;
}

export const ChapterVerseSelector: React.FC<ChapterVerseSelectorProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  selectedChapter,
  selectedVerse,
  onSelectChapterAndVerse,
}) => {
  const [activeChapterNum, setActiveChapterNum] = useState<number>(selectedChapter || 2);
  const [searchQuery, setSearchQuery] = useState('');
  const [customChapterInput, setCustomChapterInput] = useState<string>(String(selectedChapter || 2));
  const [customVerseInput, setCustomVerseInput] = useState<string>(String(selectedVerse || 47));
  const [inputError, setInputError] = useState<string | null>(null);

  const t = getTranslation(currentLanguage);
  const langConfig = SUPPORTED_LANGUAGES[currentLanguage];
  const isRtl = langConfig.direction === 'rtl';

  const currentChapter = useMemo(() => {
    return getChapterByNumber(activeChapterNum) || GITA_CHAPTERS[1];
  }, [activeChapterNum]);

  // Filter chapters based on search query
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return GITA_CHAPTERS;
    const q = searchQuery.toLowerCase();
    return GITA_CHAPTERS.filter((ch) => {
      const matchNum = ch.number.toString().includes(q);
      const matchSanskrit = ch.sanskritName.toLowerCase().includes(q);
      const matchTranslit = ch.transliteration.toLowerCase().includes(q);
      const matchTitle = ch.titles[currentLanguage]?.toLowerCase().includes(q) || ch.titles.en.toLowerCase().includes(q);
      const matchSummary = ch.summaries[currentLanguage]?.toLowerCase().includes(q);
      return matchNum || matchSanskrit || matchTranslit || matchTitle || matchSummary;
    });
  }, [searchQuery, currentLanguage]);

  // Generate verse array for current active chapter
  const versesList = useMemo(() => {
    const total = currentChapter.verseCount;
    return Array.from({ length: total }, (_, i) => i + 1);
  }, [currentChapter]);

  // Handle direct jump form
  const handleDirectJump = (e: React.FormEvent) => {
    e.preventDefault();
    setInputError(null);
    const ch = parseInt(customChapterInput, 10);
    const v = parseInt(customVerseInput, 10);

    if (isNaN(ch) || ch < 1 || ch > 18) {
      setInputError(t.invalidVerseMessage);
      return;
    }

    const targetChapter = getChapterByNumber(ch);
    if (!targetChapter || isNaN(v) || v < 1 || v > targetChapter.verseCount) {
      setInputError(`${t.invalidVerseMessage} (Chapter ${ch} has ${targetChapter?.verseCount || 0} verses)`);
      return;
    }

    onSelectChapterAndVerse(ch, v);
    onClose();
  };

  const handleSelectVerse = (verseNum: number) => {
    onSelectChapterAndVerse(activeChapterNum, verseNum);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto"
      dir={langConfig.direction}
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0b1126] border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.15)] text-slate-100 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-amber-500/20 bg-[#070b19]/90">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="font-serif-sacred text-base sm:text-lg font-bold text-amber-300">
                {t.chapterVerseSelectorTitle}
              </h2>
              <p className="text-xs text-amber-200/70">{t.chapterVerseSelectorSubtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition"
            aria-label={t.closeModal}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Direct Jump Form */}
        <div className="p-3 sm:p-4 bg-slate-900/60 border-b border-amber-500/15">
          <form onSubmit={handleDirectJump} className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 text-xs text-amber-300/90 font-medium">
              <Hash className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.jumpToVerse}:</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-400">{t.chapterLabel}</span>
              <input
                type="number"
                min="1"
                max="18"
                value={customChapterInput}
                onChange={(e) => {
                  setCustomChapterInput(e.target.value);
                  const n = parseInt(e.target.value, 10);
                  if (!isNaN(n) && n >= 1 && n <= 18) setActiveChapterNum(n);
                }}
                className="w-14 px-2 py-1 bg-slate-950 border border-amber-500/30 rounded-lg text-center text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-400">{t.verseLabel}</span>
              <input
                type="number"
                min="1"
                max="78"
                value={customVerseInput}
                onChange={(e) => setCustomVerseInput(e.target.value)}
                className="w-14 px-2 py-1 bg-slate-950 border border-amber-500/30 rounded-lg text-center text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold shadow-md transition flex items-center gap-1"
            >
              <span>{t.goToVerseButton}</span>
              {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </button>
          </form>

          {inputError && <p className="mt-2 text-xs text-rose-400 font-medium">{inputError}</p>}
        </div>

        {/* Content Body: Two Columns on Desktop (Left: Chapter List, Right: Verse Grid & Details) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x md:divide-amber-500/15">
          {/* Left Column: Chapters (5 cols on md) */}
          <div className="md:col-span-5 p-3 sm:p-4 space-y-2 border-amber-500/15 overflow-y-auto max-h-[55vh] md:max-h-[62vh]">
            <div className="relative mb-2">
              <Search className={`absolute top-2.5 ${isRtl ? 'right-2.5' : 'left-2.5'} w-3.5 h-3.5 text-slate-400`} />
              <input
                type="text"
                placeholder={t.searchChaptersPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full ${
                  isRtl ? 'pr-8 pl-3' : 'pl-8 pr-3'
                } py-1.5 bg-slate-950/80 border border-slate-700 focus:border-amber-500/60 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none`}
              />
            </div>

            <div className="space-y-1.5">
              {filteredChapters.map((ch) => {
                const isSelected = activeChapterNum === ch.number;
                return (
                  <button
                    key={ch.number}
                    onClick={() => {
                      setActiveChapterNum(ch.number);
                      setCustomChapterInput(String(ch.number));
                    }}
                    className={`w-full text-start p-2.5 rounded-xl border transition-all flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)] text-amber-200'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-850 hover:border-amber-500/20 text-slate-300'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-amber-300'
                      }`}
                    >
                      {ch.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-semibold text-xs truncate">
                          {ch.titles[currentLanguage] || ch.titles.en}
                        </span>
                        <span className="text-[10px] text-amber-400/80 font-mono shrink-0">
                          {ch.verseCount} {t.versesCountSuffix}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-sanskrit truncate mt-0.5">
                        {ch.sanskritName} ({ch.transliteration})
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Chapter Detail & Verse Grid (7 cols on md) */}
          <div className="md:col-span-7 p-4 sm:p-5 flex flex-col space-y-4 overflow-y-auto max-h-[55vh] md:max-h-[62vh] bg-slate-950/40">
            {/* Active Chapter Summary Banner */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/25">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                  {t.chapterLabel} {currentChapter.number} of 18
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {currentChapter.verseCount} {t.versesCountSuffix}
                </span>
              </div>
              <h3 className="font-serif-sacred text-base font-bold text-amber-200 mt-1">
                {currentChapter.titles[currentLanguage] || currentChapter.titles.en}
              </h3>
              <p className="text-xs text-amber-300/80 font-sanskrit mt-0.5">
                {currentChapter.sanskritName} • {currentChapter.transliteration}
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {currentChapter.summaries[currentLanguage] || currentChapter.summaries.en}
              </p>
            </div>

            {/* Verses Grid */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold text-slate-200">
                  {t.versesInChapterHeader} {t.chapterLabel} {currentChapter.number}:
                </h4>
                <span className="text-[10px] text-slate-400">
                  1 – {currentChapter.verseCount}
                </span>
              </div>

              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-7 lg:grid-cols-9 gap-1.5 max-h-56 overflow-y-auto p-1 bg-slate-900/60 rounded-xl border border-slate-800">
                {versesList.map((vNum) => {
                  const isCurrentSelection =
                    selectedChapter === currentChapter.number && selectedVerse === vNum;
                  return (
                    <button
                      key={vNum}
                      onClick={() => handleSelectVerse(vNum)}
                      className={`h-9 flex items-center justify-center rounded-lg text-xs font-semibold transition-all ${
                        isCurrentSelection
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/30 scale-105'
                          : 'bg-slate-800/80 hover:bg-amber-500/20 hover:text-amber-200 text-slate-300 border border-slate-700/60 hover:border-amber-500/40'
                      }`}
                      title={`${t.chapterLabel} ${currentChapter.number}, ${t.verseLabel} ${vNum}`}
                    >
                      {vNum}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-[#070b19] border-t border-amber-500/20 flex items-center justify-between">
          <p className="text-[11px] text-amber-200/60">
            Total 700 verified verses across all 18 chapters of Bhagavad Gita.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
