import React, { useState } from 'react';
import { BookmarkItem, Verse, LanguageCode, getVerseTranslation, getVerseLesson } from '../types';
import {
  Bookmark,
  Trash2,
  BookOpen,
  Sparkles,
  Volume2,
  VolumeX,
  Play,
  Pause,
  CornerDownRight,
  Search,
  ExternalLink,
} from 'lucide-react';
import { getTranslation } from '../i18n/translations';
import { SUPPORTED_LANGUAGES } from '../data/languages';

interface BookmarksViewProps {
  currentLanguage: LanguageCode;
  bookmarks: BookmarkItem[];
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
  onSpeak: (text: string, id: string, lang?: LanguageCode) => void;
  onPauseAudio: () => void;
  onResumeAudio: () => void;
  onStopAudio: () => void;
  currentAudioId: string | null;
  isSpeaking: boolean;
  isPaused: boolean;
  onSelectVerse: (verse: Verse) => void;
  onAskAboutQuestion: (question: string) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  currentLanguage,
  bookmarks,
  onRemoveBookmark,
  onClearAll,
  onSpeak,
  onPauseAudio,
  onResumeAudio,
  onStopAudio,
  currentAudioId,
  isSpeaking,
  isPaused,
  onSelectVerse,
  onAskAboutQuestion,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'verse' | 'assistant_answer'>('all');
  const [search, setSearch] = useState('');
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const t = getTranslation(currentLanguage);
  const langConfig = SUPPORTED_LANGUAGES[currentLanguage];
  const isRtl = langConfig.direction === 'rtl';

  const filteredBookmarks = bookmarks.filter((item) => {
    if (filterType !== 'all' && item.type !== filterType) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      (item.verse && item.verse.englishTranslation.toLowerCase().includes(q)) ||
      (item.assistantAnswer && item.assistantAnswer.summary.toLowerCase().includes(q))
    );
  });

  const handleAudio = (item: BookmarkItem) => {
    const audioKey = `bookmark-audio-${item.id}-${currentLanguage}`;
    let speechText = '';
    const itemLang = item.language || currentLanguage;

    if (item.type === 'verse' && item.verse) {
      const trans = getVerseTranslation(item.verse, currentLanguage);
      const lesson = getVerseLesson(item.verse, currentLanguage);
      speechText = `${item.title}. ${trans}. ${t.practicalLessonLabel}: ${lesson}`;
    } else if (item.type === 'assistant_answer' && item.assistantAnswer) {
      speechText = `${item.assistantAnswer.summary}. ${t.practicalLessonLabel}: ${item.assistantAnswer.practicalEverydayLesson}`;
    }

    onSpeak(speechText, audioKey, itemLang);
  };

  return (
    <div className="space-y-5 max-w-4xl mx-auto pb-12">
      {/* Header and Clear All */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/15 pb-3">
        <div>
          <h2 className="font-serif-sacred text-base sm:text-xl font-bold text-amber-200">
            {t.bookmarksTitle}
          </h2>
          <p className="text-xs text-slate-400">
            {t.bookmarksSubtitle}
          </p>
        </div>

        {bookmarks.length > 0 && (
          <button
            onClick={() => setShowClearConfirm(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-rose-300 hover:text-rose-200 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-500/20 transition self-start sm:self-center"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.clearAllBookmarks}</span>
          </button>
        )}
      </div>

      {/* Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#0f172a] border border-slate-700 p-5 shadow-2xl text-slate-100">
            <h3 className="text-sm font-bold text-amber-300 mb-2">{t.clearAllBookmarks}?</h3>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              This will remove all {bookmarks.length} saved teachings from this device.
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              >
                {t.closeModal}
              </button>
              <button
                onClick={() => {
                  onClearAll();
                  setShowClearConfirm(false);
                }}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-sm"
              >
                {t.clearAllBookmarks}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      {bookmarks.length > 0 && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800 self-start">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                filterType === 'all'
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.allTopics} ({bookmarks.length})
            </button>
            <button
              onClick={() => setFilterType('verse')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                filterType === 'verse'
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.savedItemVerse}
            </button>
            <button
              onClick={() => setFilterType('assistant_answer')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                filterType === 'assistant_answer'
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.savedItemAnswer}
            </button>
          </div>

          <div className="relative flex-1 max-w-xs">
            <Search
              className={`w-3.5 h-3.5 text-slate-400 absolute top-1/2 -translate-y-1/2 ${
                isRtl ? 'right-3' : 'left-3'
              }`}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchVersesPlaceholder}
              className={`w-full bg-slate-900/80 text-xs text-slate-200 ${
                isRtl ? 'pr-8 pl-3' : 'pl-8 pr-3'
              } py-1.5 rounded-xl border border-slate-800 focus:border-amber-500/50 focus:outline-none`}
            />
          </div>
        </div>
      )}

      {/* Bookmarks List */}
      {bookmarks.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/30 rounded-3xl border border-slate-800/80 p-6 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="font-serif-sacred text-base font-bold text-amber-200">
            {t.noBookmarksTitle}
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
            {t.noBookmarksMessage}
          </p>
        </div>
      ) : filteredBookmarks.length === 0 ? (
        <div className="text-center py-10 bg-slate-900/20 rounded-2xl border border-slate-800">
          <p className="text-xs text-slate-400">{t.noVersesFound}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredBookmarks.map((item) => {
            const audioKey = `bookmark-audio-${item.id}-${currentLanguage}`;
            const isPlayingThis = isSpeaking && currentAudioId === audioKey;
            const isPausedThis = isPaused && currentAudioId === audioKey;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0a1024] border border-amber-500/20 p-4 sm:p-5 space-y-3 hover:border-amber-500/40 transition shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/25">
                        {item.type === 'verse' ? (
                          <BookOpen className="w-3.5 h-3.5" />
                        ) : (
                          <Sparkles className="w-3.5 h-3.5" />
                        )}
                      </span>
                      <h4 className="font-serif-sacred text-xs sm:text-sm font-bold text-amber-200">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-amber-300/80 font-medium">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Audio Play/Pause/Resume/Stop Controls */}
                    {!isPlayingThis && !isPausedThis ? (
                      <button
                        onClick={() => handleAudio(item)}
                        className="p-1.5 rounded-lg bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 transition"
                        title={t.listenButton}
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

                    <button
                      onClick={() => onRemoveBookmark(item.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition"
                      title={t.bookmarkedAction}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Content snippet */}
                {item.verse && (
                  <div className="space-y-2 pt-1 border-t border-slate-800/80">
                    <p
                      dir="ltr"
                      className="font-sanskrit text-xs sm:text-sm text-amber-100/90 whitespace-pre-line text-center bg-black/30 p-2.5 rounded-lg border border-amber-500/20"
                    >
                      {item.verse.sanskrit}
                    </p>
                    <p className="text-xs text-slate-200 italic leading-relaxed">
                      "{getVerseTranslation(item.verse, currentLanguage)}"
                    </p>
                  </div>
                )}

                {item.assistantAnswer && (
                  <div className="space-y-2 pt-1 border-t border-slate-800/80">
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {item.assistantAnswer.summary}
                    </p>
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200/90">
                      <strong className="text-amber-300 block mb-0.5">{t.practicalLessonLabel}:</strong>
                      <span>{item.assistantAnswer.practicalEverydayLesson}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
