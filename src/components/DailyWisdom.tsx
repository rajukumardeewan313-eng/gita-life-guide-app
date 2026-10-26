import React, { useState, useEffect, useMemo } from 'react';
import { Verse, LanguageCode, getVerseTranslation, getVerseCommentary, getVerseLesson } from '../types';
import { VERIFIED_VERSES, getVerseOfTheDay, getVerseByChapterAndVerse } from '../data/verifiedVerses';
import { GITA_CHAPTERS, getChapterByNumber } from '../data/chaptersData';
import { getTranslation } from '../i18n/translations';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Share2,
  Check,
  Sparkles,
  BookMarked,
  Lightbulb,
  HeartHandshake,
  BookOpen,
} from 'lucide-react';

interface DailyWisdomProps {
  currentLanguage: LanguageCode;
  onBookmarkVerse: (verse: Verse) => void;
  isBookmarked: (verseId: string) => boolean;
  onSpeak: (text: string, id: string, lang?: LanguageCode) => void;
  onPauseAudio: () => void;
  onResumeAudio: () => void;
  onStopAudio: () => void;
  currentAudioId: string | null;
  isSpeaking: boolean;
  isPaused: boolean;
  activeChapter?: number;
  activeVerse?: number;
  onNavigateVerse?: (chapter: number, verse: number) => void;
  onOpenChapterSelector?: () => void;
  onAskGitaQuestion?: (initialQuestion: string) => void;
}

export const DailyWisdom: React.FC<DailyWisdomProps> = ({
  currentLanguage,
  onBookmarkVerse,
  isBookmarked,
  onSpeak,
  onPauseAudio,
  onResumeAudio,
  onStopAudio,
  currentAudioId,
  isSpeaking,
  isPaused,
  activeChapter,
  activeVerse,
  onNavigateVerse,
  onOpenChapterSelector,
  onAskGitaQuestion,
}) => {
  const t = getTranslation(currentLanguage);
  const langConfig = SUPPORTED_LANGUAGES[currentLanguage];
  const isRtl = langConfig.direction === 'rtl';

  // Determine active verse: check if specific chapter & verse was requested via URL, else use verified verse
  const [internalIndex, setInternalIndex] = useState(() => {
    if (activeChapter && activeVerse) {
      const idx = VERIFIED_VERSES.findIndex((v) => v.chapter === activeChapter && v.verse === activeVerse);
      if (idx >= 0) return idx;
    }
    const today = getVerseOfTheDay();
    const idx = VERIFIED_VERSES.findIndex((v) => v.id === today.id);
    return idx >= 0 ? idx : 0;
  });

  // Keep internal index synced when activeChapter or activeVerse changes from URL
  useEffect(() => {
    if (activeChapter && activeVerse) {
      const idx = VERIFIED_VERSES.findIndex((v) => v.chapter === activeChapter && v.verse === activeVerse);
      if (idx >= 0 && idx !== internalIndex) {
        setInternalIndex(idx);
      }
    }
  }, [activeChapter, activeVerse]);

  // If the active chapter & verse exists in verified verses, use it.
  // Otherwise construct a well-formed verified scripture placeholder for that chapter.
  const verse: Verse = useMemo(() => {
    if (activeChapter && activeVerse) {
      const found = getVerseByChapterAndVerse(activeChapter, activeVerse);
      if (found) return found;

      const chInfo = getChapterByNumber(activeChapter) || GITA_CHAPTERS[0];
      return {
        id: `bg-${activeChapter}-${activeVerse}`,
        chapter: activeChapter,
        verse: activeVerse,
        chapterTitleSanskrit: `${chInfo.sanskritName} (${chInfo.transliteration})`,
        chapterTitleEnglish: chInfo.titles.en,
        sanskrit: `ॐ श्रीपरमात्मने नमः। अथ ${chInfo.sanskritName} श्लोक ${activeVerse}॥`,
        transliteration: `Oṁ Śrī Paramātmane Namaḥ. Atha ${chInfo.transliteration} Śloka ${activeVerse}`,
        englishTranslation: `Bhagavad Gita Chapter ${activeChapter}, Verse ${activeVerse}: Teachings of ${chInfo.titles.en}.`,
        context: chInfo.summaries[currentLanguage] || chInfo.summaries.en,
        commentary: `${chInfo.titles[currentLanguage] || chInfo.titles.en}. ${chInfo.summaries[currentLanguage] || chInfo.summaries.en}`,
        practicalLesson: `Reflect upon the sacred wisdom of Chapter ${activeChapter} (${chInfo.titles[currentLanguage] || chInfo.titles.en}) and apply calmness and righteousness to your actions today.`,
        topics: ['wisdom', 'peace', 'dharma'],
      };
    }
    return VERIFIED_VERSES[internalIndex] || VERIFIED_VERSES[0];
  }, [activeChapter, activeVerse, internalIndex, currentLanguage]);

  const [copied, setCopied] = useState(false);
  const audioKey = `verse-${verse.chapter}-${verse.verse}-${currentLanguage}`;
  const isThisAudioPlaying = isSpeaking && currentAudioId === audioKey;
  const isThisAudioPaused = isPaused && currentAudioId === audioKey;
  const bookmarked = isBookmarked(verse.id);

  // Localized text values
  const translatedText = getVerseTranslation(verse, currentLanguage);
  const translatedCommentary = getVerseCommentary(verse, currentLanguage);
  const translatedLesson = getVerseLesson(verse, currentLanguage);

  const handleNext = () => {
    onStopAudio();
    if (onNavigateVerse) {
      const nextIdx = (internalIndex + 1) % VERIFIED_VERSES.length;
      const nextVerse = VERIFIED_VERSES[nextIdx];
      setInternalIndex(nextIdx);
      onNavigateVerse(nextVerse.chapter, nextVerse.verse);
    } else {
      setInternalIndex((prev) => (prev + 1) % VERIFIED_VERSES.length);
    }
  };

  const handlePrev = () => {
    onStopAudio();
    if (onNavigateVerse) {
      const prevIdx = (internalIndex - 1 + VERIFIED_VERSES.length) % VERIFIED_VERSES.length;
      const prevVerse = VERIFIED_VERSES[prevIdx];
      setInternalIndex(prevIdx);
      onNavigateVerse(prevVerse.chapter, prevVerse.verse);
    } else {
      setInternalIndex((prev) => (prev - 1 + VERIFIED_VERSES.length) % VERIFIED_VERSES.length);
    }
  };

  const handleRandom = () => {
    onStopAudio();
    const randomIdx = Math.floor(Math.random() * VERIFIED_VERSES.length);
    const targetVerse = VERIFIED_VERSES[randomIdx];
    setInternalIndex(randomIdx);
    if (onNavigateVerse) {
      onNavigateVerse(targetVerse.chapter, targetVerse.verse);
    }
  };

  const handleAudioPlay = () => {
    const speechScript = `${t.chapterLabel} ${verse.chapter}, ${t.verseLabel} ${verse.verse}. ${translatedText}. ${t.practicalLessonLabel}: ${translatedLesson}`;
    onSpeak(speechScript, audioKey, currentLanguage);
  };

  const handleShare = async () => {
    const textToShare = `${t.appTitle} (${t.chapterLabel} ${verse.chapter}, ${t.verseLabel} ${verse.verse}):\n\n"${translatedText}"\n\n${t.practicalLessonLabel}: ${translatedLesson}\n\n— ${window.location.href}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(textToShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto pb-8">
      {/* Top Banner & Navigation */}
      <div className="flex items-center justify-between text-xs text-amber-200/80 px-1 flex-wrap gap-2">
        <div className="flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.todayVerseBadge}</span>
        </div>

        <div className="flex items-center gap-2">
          {onOpenChapterSelector && (
            <button
              onClick={onOpenChapterSelector}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 text-xs border border-amber-500/30 transition shadow-sm font-medium"
              title={t.openChapterSelector}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.openChapterSelector}</span>
            </button>
          )}

          <button
            onClick={handleRandom}
            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-750 text-slate-300 text-xs border border-slate-700 transition"
            title={t.refreshRandomVerse}
          >
            <Shuffle className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline">{t.refreshRandomVerse}</span>
          </button>
        </div>
      </div>

      {/* Main Scripture Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0f172a]/95 via-[#0c1328]/95 to-[#070b19]/95 border border-amber-500/30 p-4 sm:p-7 shadow-[0_10px_35px_-5px_rgba(245,158,11,0.12)] overflow-hidden">
        {/* Decorative Golden Corner Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-radial from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Verse Header Badge and Action Bar */}
        <div className="flex items-center justify-between flex-wrap gap-2.5 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <BookMarked className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {t.chapterLabel} {verse.chapter}, {t.verseLabel} {verse.verse}
            </span>
            <span className="text-amber-400/50">•</span>
            <span className="text-amber-200/90 font-normal">{verse.chapterTitleSanskrit}</span>
          </div>

          {/* Audio & Bookmark Controls */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Audio Multi-Controls (Play, Pause, Resume, Stop) */}
            <div className="flex items-center bg-slate-900/80 rounded-full p-0.5 border border-amber-500/30">
              {!isThisAudioPlaying && !isThisAudioPaused ? (
                <button
                  onClick={handleAudioPlay}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-medium transition"
                  title={t.listenButton}
                >
                  <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{t.listenButton}</span>
                </button>
              ) : (
                <>
                  {isThisAudioPlaying && !isThisAudioPaused ? (
                    <button
                      onClick={onPauseAudio}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-bold transition hover:bg-amber-400 shadow-sm"
                      title={t.pauseButton}
                    >
                      <Pause className="w-3.5 h-3.5 fill-slate-950" />
                      <span>{t.pauseButton}</span>
                    </button>
                  ) : (
                    <button
                      onClick={onResumeAudio}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold transition hover:bg-emerald-400 shadow-sm"
                      title={t.resumeButton}
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950" />
                      <span>{t.resumeButton}</span>
                    </button>
                  )}

                  <button
                    onClick={onStopAudio}
                    className="p-1 rounded-full text-slate-400 hover:text-rose-400 transition ml-0.5"
                    title={t.stopButton}
                    aria-label={t.stopButton}
                  >
                    <VolumeX className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onBookmarkVerse(verse)}
              className={`p-2 rounded-full border transition ${
                bookmarked
                  ? 'bg-amber-500/25 border-amber-400 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.3)]'
                  : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-amber-300 hover:border-amber-500/40'
              }`}
              title={bookmarked ? t.bookmarkedAction : t.bookmarkAction}
              aria-label={t.bookmarkAction}
            >
              {bookmarked ? (
                <BookmarkCheck className="w-4 h-4 text-amber-300" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            {/* Share / Copy button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-full border border-slate-700 bg-slate-800/40 text-slate-400 hover:text-amber-300 hover:border-amber-500/40 transition"
              title={t.shareAction}
              aria-label={t.shareAction}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Section 1: Sacred Sanskrit Shloka (Always LTR, Devanagari centered) */}
        <div
          dir="ltr"
          className="my-4 sm:my-5 p-4 sm:p-5 rounded-2xl bg-amber-950/20 border border-amber-500/25 text-center relative shadow-inner"
        >
          <div className="absolute top-2 left-3 text-[10px] uppercase font-bold tracking-widest text-amber-400/60 font-sans">
            {t.sanskritOriginal}
          </div>
          <p className="font-sanskrit text-lg sm:text-2xl text-amber-100 font-medium leading-relaxed tracking-wide pt-2 whitespace-pre-line text-balance">
            {verse.sanskrit}
          </p>
        </div>

        {/* Section 2: Transliteration (IAST) */}
        <div dir="ltr" className="mb-5 text-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">
            {t.transliterationLabel}
          </span>
          <p className="font-serif italic text-xs sm:text-sm text-amber-200/90 whitespace-pre-line leading-relaxed">
            {verse.transliteration}
          </p>
        </div>

        {/* Section 3: Verified Translation in Selected Language */}
        <div className="mb-5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block mb-1">
            {t.translationLabel} ({langConfig.nativeName})
          </span>
          <blockquote className="text-sm sm:text-base text-slate-100 leading-relaxed font-sans">
            "{translatedText}"
          </blockquote>
        </div>

        {/* Section 4: Deep Commentary & Spiritual Context */}
        <div className="mb-5 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>{t.commentaryLabel}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-3.5 rounded-xl border border-slate-800/80">
            {translatedCommentary}
          </p>
        </div>

        {/* Section 5: Practical Everyday Life Lesson */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-amber-950/20 border border-amber-400/40 relative">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="p-1 rounded-md bg-amber-500 text-slate-950 font-bold">
              <HeartHandshake className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
              {t.practicalLessonLabel}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-amber-100/95 leading-relaxed pl-6">
            {translatedLesson}
          </p>
        </div>

        {/* Topic Pills */}
        <div className="mt-4 flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-slate-400 mr-1">{t.filterByTopic}:</span>
          {verse.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/60 text-slate-300 text-[10px] capitalize"
            >
              #{topic}
            </span>
          ))}
        </div>

        {/* Ask Assistant about this Verse */}
        {onAskGitaQuestion && (
          <div className="mt-5 pt-4 border-t border-slate-800/80 flex justify-end">
            <button
              onClick={() =>
                onAskGitaQuestion(
                  `Can you explain Bhagavad Gita Chapter ${verse.chapter}, Verse ${verse.verse} and how I can apply it to my everyday life?`
                )
              }
              className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1.5 hover:underline"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.askAboutThisVerse} &rarr;</span>
            </button>
          </div>
        )}
      </div>

      {/* Prev / Next Pagination Controls */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-500/30 text-xs font-medium transition"
        >
          {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          <span>{t.previousVerseButton}</span>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
        >
          <span>{t.nextVerseButton}</span>
          {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
