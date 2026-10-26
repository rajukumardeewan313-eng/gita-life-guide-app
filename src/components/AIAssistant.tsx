import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Bookmark,
  BookmarkCheck,
  Trash2,
  Sparkles,
  BookOpen,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  CornerDownRight,
  Globe,
  HelpCircle,
  Loader2,
} from 'lucide-react';
import { ChatMessage, AssistantAnswer, LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { LanguageSelector } from './LanguageSelector';
import { getTranslation } from '../i18n/translations';

interface AIAssistantProps {
  messages: ChatMessage[];
  onSendMessage: (text: string) => Promise<void>;
  isLoading: boolean;
  onClearHistory: () => void;
  onBookmarkAnswer: (answer: AssistantAnswer, userQuestion: string) => void;
  isAnswerBookmarked: (summary: string) => boolean;
  onSpeak: (text: string, id: string, language?: LanguageCode) => void;
  onPauseAudio: () => void;
  onResumeAudio: () => void;
  onStopAudio: () => void;
  currentAudioId: string | null;
  isSpeaking: boolean;
  isPaused: boolean;
  isLoadingAudio: boolean;
  initialQuestion?: string;
  onClearInitialQuestion?: () => void;
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  ttsError?: string | null;
  onClearTtsError?: () => void;
  onOpenVoiceTest: () => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  messages,
  onSendMessage,
  isLoading,
  onClearHistory,
  onBookmarkAnswer,
  isAnswerBookmarked,
  onSpeak,
  onPauseAudio,
  onResumeAudio,
  onStopAudio,
  currentAudioId,
  isSpeaking,
  isPaused,
  isLoadingAudio,
  initialQuestion,
  onClearInitialQuestion,
  currentLanguage,
  onLanguageChange,
  ttsError,
  onClearTtsError,
  onOpenVoiceTest,
}) => {
  const [inputText, setInputText] = useState('');
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const t = getTranslation(currentLanguage);
  const langConfig = SUPPORTED_LANGUAGES[currentLanguage] || SUPPORTED_LANGUAGES.en;
  const isRTL = langConfig.direction === 'rtl';

  // Voice Recognition Hook configured for the currently selected language locale
  const {
    isListening,
    transcript,
    error: speechError,
    isSupported: isSpeechSupported,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition(currentLanguage);

  // If initialQuestion is passed from other tabs (e.g., Daily Wisdom)
  useEffect(() => {
    if (initialQuestion) {
      setInputText(initialQuestion);
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
      if (onClearInitialQuestion) {
        onClearInitialQuestion();
      }
    }
  }, [initialQuestion, onClearInitialQuestion]);

  // Sync speech recognition transcript into the editable text input
  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
    }
  }, [transcript]);

  // When language changes, stop active voice recognition and stop ongoing audio
  const handleLanguageSelect = (lang: LanguageCode) => {
    if (isListening) {
      stopListening();
    }
    onStopAudio();
    if (onClearTtsError) onClearTtsError();
    resetTranscript();
    onLanguageChange(lang);
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleToggleVoice = () => {
    if (isListening) {
      stopListening();
    } else {
      if (onClearTtsError) onClearTtsError();
      resetTranscript();
      startListening();
    }
  };

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    if (isListening) {
      stopListening();
    }

    const questionToSend = inputText.trim();
    setInputText('');
    resetTranscript();
    await onSendMessage(questionToSend);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSelectPrompt = (prompt: string) => {
    setInputText(prompt);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleAudioPlayback = (messageId: string, answer: AssistantAnswer, msgLang?: LanguageCode) => {
    const audioKey = `chat-audio-${messageId}`;
    const targetLang = msgLang || answer.language || currentLanguage;
    const speechScript = `${answer.summary}. ${
      answer.scriptureReferences?.[0]?.translation || ''
    }. ${answer.practicalEverydayLesson}`;
    onSpeak(speechScript, audioKey, targetLang);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[calc(100vh-160px)] max-w-4xl mx-auto">
      {/* Top Bar: Language Selector & Clear History */}
      <div className="pb-2.5 mb-2 border-b border-amber-500/15 space-y-2.5">
        <div className="flex items-center justify-between px-1 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-amber-200/90 font-serif-sacred">
              {t.assistantTitle}
            </span>
            <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 font-medium">
              {langConfig.nativeName} ({langConfig.speechLocale})
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Test Voice Diagnostics Button */}
            <button
              onClick={onOpenVoiceTest}
              className="flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 px-2.5 py-1 rounded-md transition"
              title={t.testVoice}
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.testVoice}</span>
            </button>

            {messages.length > 0 && (
              <button
                onClick={() => setShowClearConfirm(true)}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-400 px-2 py-1 rounded-md hover:bg-rose-950/20 transition"
                title={t.clearHistory}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{t.clearHistory}</span>
              </button>
            )}
          </div>
        </div>

        {/* Visible Native Language Selector Bar */}
        <LanguageSelector
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageSelect}
          compact={false}
        />
      </div>

      {/* Clear History Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#0f172a] border border-slate-700 p-5 shadow-2xl text-slate-100">
            <h3 className="text-sm font-bold text-amber-300 mb-2">{t.clearHistory}?</h3>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              This will remove current dialogue messages from this screen. Your saved bookmarks will remain safe.
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
                  onClearHistory();
                  setShowClearConfirm(false);
                }}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-sm"
              >
                {t.clearHistory}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-4 pb-4">
        {messages.length === 0 ? (
          /* Empty State with Dynamic Native Language Prompts */
          <div className="py-5 px-3 text-center space-y-5">
            <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-700/15 to-transparent border border-amber-400/30 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <Sparkles className="w-8 h-8 text-amber-300" />
            </div>

            <div className="space-y-1.5 max-w-md mx-auto">
              <h2 className="font-serif-sacred text-base sm:text-lg font-bold text-amber-200">
                {t.assistantSubtitle}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.disclaimerText}
              </p>
            </div>

            {/* Quick Prompt Cards in Active Language */}
            <div className="space-y-2 max-w-lg mx-auto text-left pt-1">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/80">
                  {t.suggestedQuestionsTitle}:
                </span>
                <span className="text-[10px] text-slate-400">Tap to ask</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {langConfig.quickPrompts.map((qp, index) => {
                  const promptRTL = isRTL;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectPrompt(qp.prompt)}
                      dir={promptRTL ? 'rtl' : 'ltr'}
                      className={`flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 hover:bg-amber-950/30 border border-slate-800 hover:border-amber-500/40 text-left transition group shadow-sm ${
                        currentLanguage === 'ur' ? 'font-urdu' : currentLanguage === 'sd' ? 'font-sindhi' : ''
                      }`}
                    >
                      <div className="p-1 rounded-md bg-slate-800 group-hover:bg-amber-500/20 transition shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className={promptRTL ? 'text-right' : 'text-left'}>
                        <h4 className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 transition">
                          {qp.label}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">
                          {qp.prompt}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Render Chat History */
          messages.map((message) => {
            const isUser = message.role === 'user';
            const audioKey = `chat-audio-${message.id}`;
            const isThisAudioPlaying = isSpeaking && currentAudioId === audioKey;
            const isThisAudioPaused = isPaused && currentAudioId === audioKey;
            const msgLang = message.language || currentLanguage;
            const msgIsRTL = msgLang === 'ur' || msgLang === 'sd';
            const bookmarked = message.assistantAnswer
              ? isAnswerBookmarked(message.assistantAnswer.summary)
              : false;

            return (
              <div
                key={message.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
              >
                {/* User Message Bubble */}
                {isUser ? (
                  <div
                    dir={msgIsRTL ? 'rtl' : 'ltr'}
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-amber-600 to-amber-700 text-slate-950 px-4 py-2.5 shadow-md ${
                      msgLang === 'ur' ? 'font-urdu text-sm' : msgLang === 'sd' ? 'font-sindhi text-sm' : ''
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                    <span className="text-[10px] text-amber-950/70 block text-right mt-1 font-sans">
                      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ) : (
                  /* Assistant Guidance Response Card */
                  <div className="w-full max-w-[96%] sm:max-w-[90%] rounded-2xl rounded-tl-sm bg-gradient-to-b from-[#0f172a] to-[#0a1024] border border-amber-500/30 p-4 sm:p-5 shadow-lg space-y-4">
                    {/* Assistant Response Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          <BookOpen className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-serif-sacred text-xs font-bold text-amber-300">
                          {t.assistantTitle}
                        </span>
                        <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/20">
                          {SUPPORTED_LANGUAGES[msgLang]?.nativeName || 'English'}
                        </span>
                      </div>

                      {/* Listen & Bookmark Controls */}
                      <div className="flex items-center gap-1.5">
                        {message.assistantAnswer && (
                          <>
                            {/* Audio Play/Pause/Resume/Stop Controls */}
                            {!isThisAudioPlaying && !isThisAudioPaused ? (
                              <button
                                onClick={() => handleAudioPlayback(message.id, message.assistantAnswer!, msgLang)}
                                disabled={isLoadingAudio && currentAudioId === audioKey}
                                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition ${
                                  isLoadingAudio && currentAudioId === audioKey
                                    ? 'bg-slate-800 text-amber-300 border border-amber-500/30 cursor-wait'
                                    : 'bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 border border-amber-500/30'
                                }`}
                                title={t.listenButton}
                              >
                                {isLoadingAudio && currentAudioId === audioKey ? (
                                  <>
                                    <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-300" />
                                    <span>{t.audioLoading}</span>
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    <span>{t.listenButton}</span>
                                  </>
                                )}
                              </button>
                            ) : (
                              <div className="flex items-center gap-1 bg-slate-900/80 rounded-full p-0.5 border border-amber-500/30">
                                {isThisAudioPlaying && !isThisAudioPaused ? (
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
                              onClick={() => {
                                const userQ =
                                  messages.find(
                                    (m, idx) => idx === messages.indexOf(message) - 1 && m.role === 'user'
                                  )?.content || '';
                                onBookmarkAnswer(message.assistantAnswer!, userQ);
                              }}
                              className={`p-1.5 rounded-lg border transition ${
                                bookmarked
                                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.2)]'
                                  : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-amber-300'
                              }`}
                              title={bookmarked ? t.bookmarkedAction : t.bookmarkAction}
                            >
                              {bookmarked ? (
                                <BookmarkCheck className="w-3.5 h-3.5 text-amber-300" />
                              ) : (
                                <Bookmark className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Part 1: Shri Krishna's Guidance (Inspired by Gita) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>{t.krishnaGuidanceHeader}</span>
                        </div>
                        <span className="text-[10px] text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 italic">
                          {t.krishnaGuidanceSub}
                        </span>
                      </div>
                      <div
                        dir={msgIsRTL ? 'rtl' : 'ltr'}
                        className={`text-xs sm:text-sm text-slate-100 leading-relaxed bg-amber-950/10 rounded-xl p-3 border border-amber-500/15 ${
                          msgLang === 'ur' ? 'font-urdu' : msgLang === 'sd' ? 'font-sindhi' : ''
                        }`}
                      >
                        {message.assistantAnswer?.summary || message.content}
                      </div>
                    </div>

                    {/* Part 2: Related Bhagavad Gita Shloka */}
                    {message.assistantAnswer?.scriptureReferences &&
                      message.assistantAnswer.scriptureReferences.length > 0 && (
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                            <span>{t.relatedShlokaHeader}</span>
                          </div>

                          {message.assistantAnswer.scriptureReferences.map((ref, idx) => (
                            <div
                              key={idx}
                              className="rounded-xl bg-amber-950/20 border border-amber-500/30 p-3.5 space-y-2.5"
                            >
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-semibold text-amber-300">
                                  {t.chapterLabel} {ref.chapter}, {t.verseLabel} {ref.verse}
                                </span>
                                <span className="text-[10px] text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                                  {t.verifiedBadge}
                                </span>
                              </div>

                              {ref.sanskrit && (
                                <p
                                  dir="ltr"
                                  className="font-sanskrit text-xs sm:text-sm text-amber-200/95 whitespace-pre-line text-center bg-black/40 p-2.5 rounded-lg border border-amber-500/20 leading-relaxed"
                                >
                                  {ref.sanskrit}
                                </p>
                              )}

                              {ref.transliteration && (
                                <p
                                  dir="ltr"
                                  className="text-[11px] text-amber-300/70 italic text-center font-mono leading-relaxed px-1"
                                >
                                  {ref.transliteration}
                                </p>
                              )}

                              <div className="space-y-1 pt-1 border-t border-amber-500/20">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/90 block">
                                  {t.translationLabel}:
                                </span>
                                <p
                                  dir={msgIsRTL ? 'rtl' : 'ltr'}
                                  className={`text-xs text-slate-200 italic leading-relaxed ${
                                    msgLang === 'ur' ? 'font-urdu' : msgLang === 'sd' ? 'font-sindhi' : ''
                                  }`}
                                >
                                  "{ref.translation}"
                                </p>
                              </div>

                              {(ref.relevanceExplanation || message.assistantAnswer?.teachingExplanation) && (
                                <div className="space-y-1 pt-1 border-t border-amber-500/15">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/80 block">
                                    {t.relevanceExplanationLabel}
                                  </span>
                                  <p
                                    dir={msgIsRTL ? 'rtl' : 'ltr'}
                                    className={`text-xs text-slate-300 leading-relaxed ${
                                      msgLang === 'ur' ? 'font-urdu' : msgLang === 'sd' ? 'font-sindhi' : ''
                                    }`}
                                  >
                                    {ref.relevanceExplanation || message.assistantAnswer?.teachingExplanation}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                    {/* Part 3: Practical Life Lesson */}
                    {message.assistantAnswer?.practicalEverydayLesson && (
                      <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-transparent border border-amber-400/30 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                          <span>{t.practicalLessonHeader}</span>
                        </div>
                        <p
                          dir={msgIsRTL ? 'rtl' : 'ltr'}
                          className={`text-xs text-slate-200 leading-relaxed ${
                            msgLang === 'ur' ? 'font-urdu' : msgLang === 'sd' ? 'font-sindhi' : ''
                          }`}
                        >
                          {message.assistantAnswer.practicalEverydayLesson}
                        </p>
                      </div>
                    )}

                    {/* Follow-up Question Suggestions */}
                    {message.assistantAnswer?.suggestedFollowUps &&
                      message.assistantAnswer.suggestedFollowUps.length > 0 && (
                        <div className="pt-2 border-t border-slate-800 space-y-1.5">
                          <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                            <CornerDownRight className="w-3 h-3 text-amber-400" />
                            {t.suggestedQuestionsTitle}:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {message.assistantAnswer.suggestedFollowUps.map((q, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSelectPrompt(q)}
                                dir={msgIsRTL ? 'rtl' : 'ltr'}
                                className={`text-[11px] text-left px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-amber-950/40 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-200 transition ${
                                  msgLang === 'ur' ? 'font-urdu' : msgLang === 'sd' ? 'font-sindhi' : ''
                                }`}
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Disclaimer Note */}
                    <div className="text-[10px] text-slate-500 pt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500/60 shrink-0" />
                      <span>{t.disclaimerText}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2.5 max-w-[85%] rounded-2xl bg-slate-900/90 border border-amber-500/30 p-4">
            <div className="w-6 h-6 rounded-full border-2 border-amber-400 border-t-transparent animate-spin shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs font-semibold text-amber-300">
                {t.aiThinking}
              </p>
              <p className="text-[11px] text-slate-400">
                {t.disclaimerText}
              </p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Voice Recognition Live Banner */}
      {isListening && (
        <div className="mb-2 p-2.5 rounded-xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-between text-xs text-amber-200 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            <span className="font-semibold text-amber-300">
              {t.listeningSpeech} ({langConfig.nativeName} - {langConfig.speechLocale})
            </span>
          </div>
          <button
            onClick={stopListening}
            className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-semibold text-[11px] hover:bg-amber-400"
          >
            {t.speechMicStop}
          </button>
        </div>
      )}

      {/* Speech Recognition Error Banner */}
      {speechError && (
        <div className="mb-2 p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-xs flex items-start justify-between gap-2 shadow-sm">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <strong className="text-rose-300 block font-semibold">{t.speechNotSupported}</strong>
              <p className="text-[11px] leading-relaxed text-slate-200">{speechError}</p>
            </div>
          </div>
          <button
            onClick={resetTranscript}
            className="text-[10px] text-rose-300 hover:text-white underline shrink-0 px-1 py-0.5"
          >
            {t.closeModal}
          </button>
        </div>
      )}

      {/* TTS Audio Voice Error Banner */}
      {ttsError && (
        <div className="mb-2 p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-200 text-xs flex items-start justify-between gap-2 shadow-sm">
          <div className="flex items-start gap-2">
            <VolumeX className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <strong className="text-amber-300 block font-semibold">{t.audioPlayingStatus}</strong>
              <p className="text-[11px] leading-relaxed text-slate-200">{ttsError}</p>
            </div>
          </div>
          {onClearTtsError && (
            <button
              onClick={onClearTtsError}
              className="text-[10px] text-amber-300 hover:text-white underline shrink-0 px-1 py-0.5"
            >
              {t.closeModal}
            </button>
          )}
        </div>
      )}

      {/* Text & Voice Input Box Form */}
      <form
        onSubmit={handleSend}
        className="relative bg-slate-900/90 border border-amber-500/30 rounded-2xl p-2 shadow-xl focus-within:border-amber-400 transition"
      >
        <div className="flex items-end gap-2">
          {/* Text Area */}
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            dir={isRTL ? 'rtl' : 'ltr'}
            placeholder={langConfig.placeholder}
            rows={2}
            className={`w-full bg-transparent text-xs sm:text-sm text-slate-100 placeholder-slate-400 resize-none outline-none p-1.5 max-h-32 focus:ring-0 leading-relaxed ${
              currentLanguage === 'ur' ? 'font-urdu' : currentLanguage === 'sd' ? 'font-sindhi' : ''
            }`}
          />

          {/* Action Buttons: Microphone & Send */}
          <div className="flex items-center gap-1 pb-1 shrink-0">
            {/* Microphone Toggle Button */}
            <button
              type="button"
              onClick={handleToggleVoice}
              className={`p-2.5 rounded-xl transition ${
                isListening
                  ? 'bg-rose-500 text-white shadow-[0_0_12px_rgba(244,63,94,0.5)] animate-pulse'
                  : 'bg-slate-800/80 text-amber-300 hover:bg-amber-500/20 border border-amber-500/20 hover:border-amber-500/40'
              }`}
              title={
                !isSpeechSupported
                  ? t.speechNotSupported
                  : isListening
                  ? t.speechMicStop
                  : `${t.speechMicStart} (${langConfig.nativeName})`
              }
              aria-label={t.speechMicStart}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className={`p-2.5 rounded-xl transition flex items-center justify-center ${
                inputText.trim() && !isLoading
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 active:scale-95'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
              }`}
              title={t.sendButton}
              aria-label={t.sendButton}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
