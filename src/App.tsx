/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomeView } from './components/HomeView';
import { DailyWisdom } from './components/DailyWisdom';
import { AIAssistant } from './components/AIAssistant';
import { ScriptureExplorer } from './components/ScriptureExplorer';
import { BookmarksView } from './components/BookmarksView';
import { ChapterVerseSelector } from './components/ChapterVerseSelector';
import { InfoModal } from './components/InfoModal';
import { VoiceTestingModal } from './components/VoiceTestingModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { useBookmarks } from './hooks/useBookmarks';
import { useTextToSpeech } from './hooks/useTextToSpeech';
import { useAppRouting } from './hooks/useAppRouting';
import { TabType, ChatMessage, Verse, AssistantAnswer, LanguageCode } from './types';
import { SUPPORTED_LANGUAGES } from './data/languages';
import { getTranslation } from './i18n/translations';
import { getSemanticGuidance } from './data/semanticWisdom';

const CHAT_STORAGE_KEY = 'gita_life_guide_chat_v1';

export default function App() {
  const {
    currentLanguage,
    activeTab,
    selectedChapter,
    selectedVerse,
    navigateToTab,
    navigateToVerse,
    switchLanguage,
  } = useAppRouting();

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isVoiceTestOpen, setIsVoiceTestOpen] = useState(false);
  const [isChapterSelectorOpen, setIsChapterSelectorOpen] = useState(false);
  const [pendingPrompt, setPendingPrompt] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const langConfig = SUPPORTED_LANGUAGES[currentLanguage] || SUPPORTED_LANGUAGES.en;
  const t = getTranslation(currentLanguage);

  // Chat messages stored in localStorage
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(CHAT_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Failed reading chat history from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
      console.warn('Failed writing chat history to localStorage', e);
    }
  }, [messages]);

  // Bookmarks hook
  const {
    bookmarks,
    isVerseBookmarked,
    isAnswerBookmarked,
    toggleVerseBookmark,
    toggleAnswerBookmark,
    removeBookmark,
    clearAllBookmarks,
  } = useBookmarks();

  // Text-To-Speech with multilingual voices, remote neural fallback, and test interface
  const {
    isSpeaking,
    isPaused,
    isLoadingAudio,
    currentId: currentAudioId,
    error: ttsError,
    speak,
    pause: pauseAudio,
    resume: resumeAudio,
    stop: stopAudio,
    testVoice,
    getVoiceStatus,
    clearError: clearTtsError,
  } = useTextToSpeech();

  // Language Change handler (immediately updates speech recognition, TTS, and AI target)
  const handleLanguageChange = (newLang: LanguageCode) => {
    stopAudio();
    clearTtsError();
    switchLanguage(newLang);
  };

  // Send message to server-side Gemini assistant with user selected language
  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessageId = `msg-user-${Date.now()}`;
    const newUserMessage: ChatMessage = {
      id: userMessageId,
      role: 'user',
      content: text.trim(),
      timestamp: Date.now(),
      language: currentLanguage,
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/gita-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: text.trim(),
          conversationHistory: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          language: currentLanguage,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data: AssistantAnswer = await response.json();

      const assistantMessageId = `msg-asst-${Date.now()}`;
      const newAssistantMessage: ChatMessage = {
        id: assistantMessageId,
        role: 'assistant',
        content: data.summary,
        timestamp: Date.now(),
        assistantAnswer: data,
        language: data.language || currentLanguage,
      };

      setMessages((prev) => [...prev, newAssistantMessage]);
    } catch (error) {
      console.log('[Gita Guide] Client fallback: loading local verified scripture guidance.');
      const data = getSemanticGuidance(text, currentLanguage);
      const assistantMessageId = `msg-asst-${Date.now()}`;
      const newAssistantMessage: ChatMessage = {
        id: assistantMessageId,
        role: 'assistant',
        content: data.summary,
        timestamp: Date.now(),
        assistantAnswer: data as AssistantAnswer,
        language: currentLanguage,
      };

      setMessages((prev) => [...prev, newAssistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    stopAudio();
    setMessages([]);
  };

  const handleTriggerQuestion = (questionText: string) => {
    setPendingPrompt(questionText);
    navigateToTab('assistant');
  };

  const handleSelectVerseForDaily = (verse: Verse) => {
    navigateToVerse(verse.chapter, verse.verse);
  };

  const handleSelectChapterAndVerse = (chapter: number, verse: number) => {
    stopAudio();
    navigateToVerse(chapter, verse);
  };

  return (
    <div
      dir={langConfig.direction}
      className={`min-h-screen bg-[#070b19] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200 ${
        currentLanguage === 'ur'
          ? 'font-urdu'
          : currentLanguage === 'sd'
          ? 'font-sindhi'
          : currentLanguage === 'ta'
          ? 'font-tamil'
          : currentLanguage === 'gu'
          ? 'font-gujarati'
          : currentLanguage === 'hi'
          ? 'font-devanagari'
          : ''
      }`}
    >
      {/* Offline Status Toast */}
      <OfflineIndicator />

      {/* Top Application Header with Language Selector & Voice Diagnostics */}
      <Header
        onOpenInfo={() => setIsInfoOpen(true)}
        onOpenVoiceTest={() => setIsVoiceTestOpen(true)}
        onOpenChapterSelector={() => setIsChapterSelectorOpen(true)}
        activeAudio={isSpeaking}
        onStopAllAudio={stopAudio}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      {/* Desktop / Mobile Tab Switcher */}
      <Navigation
        activeTab={activeTab}
        onSelectTab={(tab) => {
          stopAudio();
          navigateToTab(tab);
        }}
        bookmarkCount={bookmarks.length}
        currentLanguage={currentLanguage}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-3 sm:p-5 pb-20 md:pb-8">
        {activeTab === 'home' && (
          <HomeView
            currentLanguage={currentLanguage}
            onSelectTab={navigateToTab}
            onAskQuestion={handleTriggerQuestion}
            onOpenChapterSelector={() => setIsChapterSelectorOpen(true)}
            onSpeak={(text, id, lang) => speak(text, id, lang || currentLanguage)}
            onPauseAudio={pauseAudio}
            onResumeAudio={resumeAudio}
            onStopAudio={stopAudio}
            currentAudioId={currentAudioId}
            isSpeaking={isSpeaking}
            isPaused={isPaused}
          />
        )}

        {activeTab === 'daily' && (
          <DailyWisdom
            currentLanguage={currentLanguage}
            onBookmarkVerse={toggleVerseBookmark}
            isBookmarked={isVerseBookmarked}
            onSpeak={(text, id, lang) => speak(text, id, lang || currentLanguage)}
            onPauseAudio={pauseAudio}
            onResumeAudio={resumeAudio}
            onStopAudio={stopAudio}
            currentAudioId={currentAudioId}
            isSpeaking={isSpeaking}
            isPaused={isPaused}
            activeChapter={selectedChapter}
            activeVerse={selectedVerse}
            onNavigateVerse={(ch, v) => navigateToVerse(ch, v)}
            onOpenChapterSelector={() => setIsChapterSelectorOpen(true)}
            onAskGitaQuestion={handleTriggerQuestion}
          />
        )}

        {activeTab === 'assistant' && (
          <AIAssistant
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            onClearHistory={handleClearHistory}
            onBookmarkAnswer={toggleAnswerBookmark}
            isAnswerBookmarked={isAnswerBookmarked}
            onSpeak={(text, id, lang) => speak(text, id, lang || currentLanguage)}
            onPauseAudio={pauseAudio}
            onResumeAudio={resumeAudio}
            onStopAudio={stopAudio}
            currentAudioId={currentAudioId}
            isSpeaking={isSpeaking}
            isPaused={isPaused}
            isLoadingAudio={isLoadingAudio}
            initialQuestion={pendingPrompt}
            onClearInitialQuestion={() => setPendingPrompt(undefined)}
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
            ttsError={ttsError}
            onClearTtsError={clearTtsError}
            onOpenVoiceTest={() => setIsVoiceTestOpen(true)}
          />
        )}

        {activeTab === 'explorer' && (
          <ScriptureExplorer
            currentLanguage={currentLanguage}
            onBookmarkVerse={toggleVerseBookmark}
            isBookmarked={isVerseBookmarked}
            onSpeak={(text, id, lang) => speak(text, id, lang || currentLanguage)}
            onPauseAudio={pauseAudio}
            onResumeAudio={resumeAudio}
            onStopAudio={stopAudio}
            currentAudioId={currentAudioId}
            isSpeaking={isSpeaking}
            isPaused={isPaused}
            onOpenChapterSelector={() => setIsChapterSelectorOpen(true)}
            onNavigateToVerse={(ch, v) => navigateToVerse(ch, v)}
            onAskAboutVerse={(v) =>
              handleTriggerQuestion(
                `Can you explain Bhagavad Gita Chapter ${v.chapter}, Verse ${v.verse} ("${v.englishTranslation}") and how it helps resolve modern everyday struggles?`
              )
            }
          />
        )}

        {activeTab === 'bookmarks' && (
          <BookmarksView
            currentLanguage={currentLanguage}
            bookmarks={bookmarks}
            onRemoveBookmark={removeBookmark}
            onClearAll={clearAllBookmarks}
            onSpeak={(text, id, lang) => speak(text, id, lang || currentLanguage)}
            onPauseAudio={pauseAudio}
            onResumeAudio={resumeAudio}
            onStopAudio={stopAudio}
            currentAudioId={currentAudioId}
            isSpeaking={isSpeaking}
            isPaused={isPaused}
            onSelectVerse={handleSelectVerseForDaily}
            onAskAboutQuestion={handleTriggerQuestion}
          />
        )}
      </main>

      {/* Chapter & Verse Interactive Selection Drawer / Modal */}
      <ChapterVerseSelector
        isOpen={isChapterSelectorOpen}
        onClose={() => setIsChapterSelectorOpen(false)}
        currentLanguage={currentLanguage}
        selectedChapter={selectedChapter || 2}
        selectedVerse={selectedVerse || 47}
        onSelectChapterAndVerse={handleSelectChapterAndVerse}
      />

      {/* Scriptural Integrity & About/Settings Modal with Language Selector */}
      <InfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        onOpenVoiceTest={() => setIsVoiceTestOpen(true)}
      />

      {/* Multilingual Voice Diagnostics & Testing Modal */}
      <VoiceTestingModal
        isOpen={isVoiceTestOpen}
        onClose={() => setIsVoiceTestOpen(false)}
        onTestVoice={testVoice}
        onStopAudio={stopAudio}
        isSpeaking={isSpeaking}
        isLoadingAudio={isLoadingAudio}
        currentAudioId={currentAudioId}
        getVoiceStatus={getVoiceStatus}
      />
    </div>
  );
}
