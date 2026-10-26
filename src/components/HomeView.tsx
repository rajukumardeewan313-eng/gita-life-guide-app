import React from 'react';
import {
  Sparkles,
  Sun,
  Bot,
  BookOpen,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Flame,
  CloudRain,
  Target,
  Heart,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Compass,
  Bookmark,
} from 'lucide-react';
import { Verse, TabType, LanguageCode, getVerseTranslation, getVerseLesson } from '../types';
import { getVerseOfTheDay } from '../data/verifiedVerses';
import { getTranslation } from '../i18n/translations';
import { SUPPORTED_LANGUAGES } from '../data/languages';

interface HomeViewProps {
  currentLanguage: LanguageCode;
  onSelectTab: (tab: TabType) => void;
  onAskQuestion: (prompt: string) => void;
  onOpenChapterSelector: () => void;
  onSpeak: (text: string, id: string, lang?: LanguageCode) => void;
  onPauseAudio: () => void;
  onResumeAudio: () => void;
  onStopAudio: () => void;
  currentAudioId: string | null;
  isSpeaking: boolean;
  isPaused: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  currentLanguage,
  onSelectTab,
  onAskQuestion,
  onOpenChapterSelector,
  onSpeak,
  onPauseAudio,
  onResumeAudio,
  onStopAudio,
  currentAudioId,
  isSpeaking,
  isPaused,
}) => {
  const t = getTranslation(currentLanguage);
  const langConfig = SUPPORTED_LANGUAGES[currentLanguage];
  const isRtl = langConfig.direction === 'rtl';

  const dailyVerse = getVerseOfTheDay();
  const audioKey = `home-daily-${dailyVerse.id}-${currentLanguage}`;
  const isThisPlaying = isSpeaking && currentAudioId === audioKey;
  const isThisPaused = isPaused && currentAudioId === audioKey;

  const translatedDailyText = getVerseTranslation(dailyVerse, currentLanguage);
  const translatedDailyLesson = getVerseLesson(dailyVerse, currentLanguage);

  const handleAudioDaily = () => {
    const text = `${t.dailyFeatureHeader}: ${t.chapterLabel} ${dailyVerse.chapter}, ${t.verseLabel} ${dailyVerse.verse}. ${translatedDailyText}. ${t.practicalLessonLabel}: ${translatedDailyLesson}`;
    onSpeak(text, audioKey, currentLanguage);
  };

  const PILLARS = [
    {
      title: t.pillarAnger,
      desc: 'Understand the psychological chain from attachment to rage and loss of reason.',
      verseRef: 'BG 2.62–63',
      icon: <Flame className="w-4 h-4 text-amber-400" />,
      prompt: langConfig.quickPrompts[1]?.prompt || 'How does the Gita explain the root cause of anger and how to control it?',
    },
    {
      title: t.pillarAnxiety,
      desc: 'Master the art of total dedication to your duty while letting go of obsessive anxiety.',
      verseRef: 'BG 2.47',
      icon: <CloudRain className="w-4 h-4 text-blue-400" />,
      prompt: langConfig.quickPrompts[0]?.prompt || 'How do I apply Karma Yoga to overcome workplace stress and anxiety?',
    },
    {
      title: t.pillarDiscipline,
      desc: 'Train attention with persistent practice (Abhyasa) and calm dispassion (Vairagya).',
      verseRef: 'BG 6.35',
      icon: <Target className="w-4 h-4 text-emerald-400" />,
      prompt: langConfig.quickPrompts[2]?.prompt || 'What did Krishna advise Arjuna on taming an unruly mind?',
    },
    {
      title: t.pillarRelationships,
      desc: 'Cultivate compassion, forgiveness, and equanimity when hurt by others.',
      verseRef: 'BG 12.13',
      icon: <Heart className="w-4 h-4 text-rose-400" />,
      prompt: langConfig.quickPrompts[3]?.prompt || 'How can I cultivate forgiveness and stop bearing grudges according to the Gita?',
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Hero Spiritual Greeting */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0c142e] via-[#090f24] to-[#050814] border border-amber-500/25 p-5 sm:p-7 shadow-[0_10px_35px_-5px_rgba(245,158,11,0.12)] overflow-hidden">
        {/* Divine Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.appSubtitle}</span>
          </div>

          <div className="space-y-1.5">
            <h2 className="font-serif-sacred text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 leading-tight">
              {t.heroTitle} {t.heroHighlight}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              {t.heroDescription}
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={() => onSelectTab('assistant')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition active:scale-95"
            >
              <Bot className="w-4 h-4" />
              <span>{t.heroAskBtn}</span>
            </button>

            <button
              onClick={() => onSelectTab('daily')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
            >
              <Sun className="w-4 h-4 text-amber-400" />
              <span>{t.heroDailyBtn}</span>
            </button>

            <button
              onClick={onOpenChapterSelector}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{t.heroBrowseBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Verse of the Day Card Preview */}
      <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0b1021] border border-amber-500/20 p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sun className="w-4 h-4 text-amber-400" />
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">
                {t.dailyFeatureHeader}
              </span>
              <h3 className="font-serif-sacred text-xs sm:text-sm font-bold text-amber-200">
                {t.chapterLabel} {dailyVerse.chapter}, {t.verseLabel} {dailyVerse.verse}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Audio Controls */}
            {!isThisPlaying && !isThisPaused ? (
              <button
                onClick={handleAudioDaily}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 border border-amber-500/30 transition"
                title={t.listenButton}
              >
                <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{t.listenButton}</span>
              </button>
            ) : (
              <div className="flex items-center gap-1 bg-slate-900/80 rounded-full p-0.5 border border-amber-500/30">
                {isThisPlaying && !isThisPaused ? (
                  <button
                    onClick={onPauseAudio}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-bold transition hover:bg-amber-400 shadow-sm"
                    title={t.pauseButton}
                  >
                    <Pause className="w-3 h-3 fill-slate-950" />
                    <span>{t.pauseButton}</span>
                  </button>
                ) : (
                  <button
                    onClick={onResumeAudio}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold transition hover:bg-emerald-400 shadow-sm"
                    title={t.resumeButton}
                  >
                    <Play className="w-3 h-3 fill-slate-950" />
                    <span>{t.resumeButton}</span>
                  </button>
                )}
                <button
                  onClick={onStopAudio}
                  className="p-1 rounded-full text-slate-400 hover:text-rose-400 transition"
                  title={t.stopButton}
                >
                  <VolumeX className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <button
              onClick={() => onSelectTab('daily')}
              className="text-xs text-amber-300 hover:text-amber-200 px-2.5 py-1 rounded-lg hover:bg-slate-800 flex items-center gap-1 transition"
            >
              <span>{t.viewVerseDetails}</span>
              {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Sanskrit snippet */}
        <div dir="ltr" className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-center">
          <p className="font-sanskrit text-sm sm:text-base text-amber-100 font-medium leading-relaxed">
            {dailyVerse.sanskrit.split('\n')[0]}...
          </p>
        </div>

        {/* Localized Translation */}
        <blockquote className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
          "{translatedDailyText}"
        </blockquote>

        {/* Practical micro-action */}
        <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-amber-300">{t.practicalLessonLabel}: </strong>
            {translatedDailyLesson}
          </span>
        </div>
      </div>

      {/* Core Life Pillars Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-serif-sacred text-sm sm:text-base font-bold text-amber-200">
            {t.lifePillarsTitle}
          </h3>
          <span className="text-[11px] text-slate-400">{t.lifePillarsSubtitle}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 p-4 transition flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-amber-500/20 transition">
                      {pillar.icon}
                    </div>
                    <h4 className="font-serif-sacred text-xs sm:text-sm font-bold text-slate-100 group-hover:text-amber-300 transition">
                      {pillar.title}
                    </h4>
                  </div>
                  <span className="text-[10px] text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {pillar.verseRef}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onAskQuestion(pillar.prompt)}
                className="w-full py-1.5 px-3 rounded-lg bg-slate-800/80 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-700/60 hover:border-amber-500/30 text-xs font-medium flex items-center justify-center gap-1.5 transition"
              >
                <span>{t.heroAskBtn}</span>
                {isRtl ? (
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                ) : (
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Scriptural Integrity & Features Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
        <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-center space-y-0.5">
          <span className="text-base font-bold text-amber-300">18</span>
          <p className="text-[10px] text-slate-400 uppercase font-medium">{t.allChaptersHeader}</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-center space-y-0.5">
          <span className="text-base font-bold text-amber-300">700</span>
          <p className="text-[10px] text-slate-400 uppercase font-medium">{t.verifiedBadge}</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-center space-y-0.5">
          <span className="text-base font-bold text-amber-300">6</span>
          <p className="text-[10px] text-slate-400 uppercase font-medium">{t.languageSelectLabel}</p>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-center space-y-0.5">
          <span className="text-base font-bold text-amber-300">Offline</span>
          <p className="text-[10px] text-slate-400 uppercase font-medium">{t.installApp}</p>
        </div>
      </div>
    </div>
  );
};
