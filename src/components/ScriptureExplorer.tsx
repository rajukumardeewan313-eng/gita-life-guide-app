import React, { useState, useMemo } from 'react';
import { Verse, LanguageCode, getVerseTranslation, getVerseLesson } from '../types';
import { VERIFIED_VERSES, TOPIC_CATEGORIES, searchVerifiedVerses } from '../data/verifiedVerses';
import { getTranslation } from '../i18n/translations';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import {
  Search,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  Sparkles,
  Filter,
  Check,
  Share2,
  ExternalLink,
} from 'lucide-react';

interface ScriptureExplorerProps {
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
  onAskAboutVerse: (verse: Verse) => void;
  onOpenChapterSelector: () => void;
  onNavigateToVerse?: (chapter: number, verse: number) => void;
}

export const ScriptureExplorer: React.FC<ScriptureExplorerProps> = ({
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
  onAskAboutVerse,
  onOpenChapterSelector,
  onNavigateToVerse,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedVerseModal, setSelectedVerseModal] = useState<Verse | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const t = getTranslation(currentLanguage);
  const langConfig = SUPPORTED_LANGUAGES[currentLanguage];
  const isRtl = langConfig.direction === 'rtl';

  const filteredVerses = useMemo(() => {
    return searchVerifiedVerses(searchQuery, selectedTopic, currentLanguage);
  }, [searchQuery, selectedTopic, currentLanguage]);

  const handleAudioToggle = (verse: Verse) => {
    const audioKey = `explore-verse-${verse.id}-${currentLanguage}`;
    const trans = getVerseTranslation(verse, currentLanguage);
    const lesson = getVerseLesson(verse, currentLanguage);
    const speechScript = `${t.chapterLabel} ${verse.chapter}, ${t.verseLabel} ${verse.verse}. ${trans}. ${t.practicalLessonLabel}: ${lesson}`;
    onSpeak(speechScript, audioKey, currentLanguage);
  };

  const handleCopy = async (verse: Verse) => {
    const trans = getVerseTranslation(verse, currentLanguage);
    const lesson = getVerseLesson(verse, currentLanguage);
    const textToCopy = `${t.appTitle} ${t.chapterLabel} ${verse.chapter}, ${t.verseLabel} ${verse.verse}:\n"${trans}"\n${t.practicalLessonLabel}: ${lesson}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedId(verse.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="space-y-5 max-w-4xl mx-auto pb-12">
      {/* Title & Introduction */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/15 pb-3">
        <div>
          <h2 className="font-serif-sacred text-base sm:text-xl font-bold text-amber-200">
            {t.explorerTitle}
          </h2>
          <p className="text-xs text-slate-400">
            {t.explorerSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenChapterSelector}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 text-xs font-semibold border border-amber-500/30 transition shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.openChapterSelector}</span>
          </button>

          <div className="text-xs text-amber-400/90 font-medium bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            {filteredVerses.length} {t.totalVersesFound}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search
          className={`w-4 h-4 text-amber-400/80 absolute top-1/2 -translate-y-1/2 pointer-events-none ${
            isRtl ? 'right-3.5' : 'left-3.5'
          }`}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.searchVersesPlaceholder}
          dir={langConfig.direction}
          className={`w-full bg-slate-900/80 text-xs sm:text-sm text-slate-100 placeholder-slate-400 ${
            isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'
          } py-2.5 rounded-2xl border border-amber-500/25 focus:border-amber-400 focus:outline-none transition shadow-inner`}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className={`absolute top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 ${
              isRtl ? 'left-3' : 'right-3'
            }`}
          >
            {t.closeModal}
          </button>
        )}
      </div>

      {/* Topic Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar">
        <button
          onClick={() => setSelectedTopic('all')}
          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition ${
            selectedTopic === 'all'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
              : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 border border-slate-800'
          }`}
        >
          {t.allTopics}
        </button>

        {TOPIC_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedTopic(cat.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition ${
              selectedTopic === cat.id
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Verses List / Grid */}
      {filteredVerses.length === 0 ? (
        <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-2">
          <BookOpen className="w-8 h-8 text-slate-500 mx-auto" />
          <p className="text-sm text-slate-300 font-medium">{t.noVersesFound}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVerses.map((verse) => {
            const audioKey = `explore-verse-${verse.id}-${currentLanguage}`;
            const isPlayingThis = isSpeaking && currentAudioId === audioKey;
            const isPausedThis = isPaused && currentAudioId === audioKey;
            const isSaved = isBookmarked(verse.id);
            const trans = getVerseTranslation(verse, currentLanguage);
            const lesson = getVerseLesson(verse, currentLanguage);

            return (
              <div
                key={verse.id}
                className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0a0f21] border border-amber-500/25 p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-amber-500/50 transition shadow-sm group"
              >
                <div className="space-y-3">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-serif-sacred">
                      {t.chapterLabel} {verse.chapter}, {t.verseLabel} {verse.verse}
                    </span>

                    <div className="flex items-center gap-1">
                      {/* Audio Play/Pause/Resume/Stop Controls */}
                      {!isPlayingThis && !isPausedThis ? (
                        <button
                          onClick={() => handleAudioToggle(verse)}
                          className="p-1.5 rounded-lg bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition"
                          title={t.listenButton}
                          aria-label={t.listenButton}
                        >
                          <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        </button>
                      ) : (
                        <div className="flex items-center gap-0.5 bg-slate-900 rounded-full p-0.5 border border-amber-500/30">
                          {isPlayingThis && !isPausedThis ? (
                            <button
                              onClick={onPauseAudio}
                              className="p-1 rounded-full bg-amber-500 text-slate-950"
                              title={t.pauseButton}
                            >
                              <Pause className="w-3 h-3 fill-slate-950" />
                            </button>
                          ) : (
                            <button
                              onClick={onResumeAudio}
                              className="p-1 rounded-full bg-emerald-500 text-slate-950"
                              title={t.resumeButton}
                            >
                              <Play className="w-3 h-3 fill-slate-950" />
                            </button>
                          )}
                          <button
                            onClick={onStopAudio}
                            className="p-1 rounded-full text-slate-400 hover:text-rose-400"
                            title={t.stopButton}
                          >
                            <VolumeX className="w-3 h-3" />
                          </button>
                        </div>
                      )}

                      {/* Bookmark button */}
                      <button
                        onClick={() => onBookmarkVerse(verse)}
                        className={`p-1.5 rounded-lg border transition ${
                          isSaved
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-amber-300'
                        }`}
                        title={isSaved ? t.bookmarkedAction : t.bookmarkAction}
                        aria-label={t.bookmarkAction}
                      >
                        {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-amber-300" /> : <Bookmark className="w-3.5 h-3.5" />}
                      </button>

                      {/* Copy / Share button */}
                      <button
                        onClick={() => handleCopy(verse)}
                        className="p-1.5 rounded-lg border border-slate-700 bg-slate-800/40 text-slate-400 hover:text-amber-300 transition"
                        title={t.shareAction}
                        aria-label={t.shareAction}
                      >
                        {copiedId === verse.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Sanskrit text */}
                  <div dir="ltr" className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-center">
                    <p className="font-sanskrit text-xs sm:text-sm text-amber-100 font-medium whitespace-pre-line leading-relaxed">
                      {verse.sanskrit}
                    </p>
                  </div>

                  {/* Translation in selected language */}
                  <blockquote className="text-xs text-slate-200 leading-relaxed italic">
                    "{trans}"
                  </blockquote>

                  {/* Practical Life Lesson */}
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200/90 space-y-0.5">
                    <strong className="text-amber-300 block uppercase tracking-wide text-[10px]">
                      {t.practicalLessonLabel}:
                    </strong>
                    <p>{lesson}</p>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                  {onNavigateToVerse && (
                    <button
                      onClick={() => onNavigateToVerse(verse.chapter, verse.verse)}
                      className="text-[11px] text-amber-300 hover:text-amber-200 flex items-center gap-1 hover:underline"
                    >
                      <BookOpen className="w-3 h-3 text-amber-400" />
                      <span>{t.viewVerseDetails}</span>
                    </button>
                  )}

                  <button
                    onClick={() => onAskAboutVerse(verse)}
                    className="text-[11px] text-slate-400 hover:text-amber-300 flex items-center gap-1 transition"
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{t.askAboutThisVerse}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
