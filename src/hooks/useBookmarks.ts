import { useState, useEffect } from 'react';
import { BookmarkItem, Verse, AssistantAnswer } from '../types';

const STORAGE_KEY = 'gita_life_guide_bookmarks_v1';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Failed reading bookmarks from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (e) {
      console.warn('Failed writing bookmarks to localStorage', e);
    }
  }, [bookmarks]);

  const isVerseBookmarked = (verseId: string) => {
    return bookmarks.some((b) => b.type === 'verse' && b.verse?.id === verseId);
  };

  const isAnswerBookmarked = (answerSummary: string) => {
    return bookmarks.some(
      (b) => b.type === 'assistant_answer' && b.assistantAnswer?.summary === answerSummary
    );
  };

  const toggleVerseBookmark = (verse: Verse) => {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.type === 'verse' && b.verse?.id === verse.id);
      if (exists) {
        return prev.filter((b) => !(b.type === 'verse' && b.verse?.id === verse.id));
      } else {
        const newItem: BookmarkItem = {
          id: `bm-verse-${verse.id}-${Date.now()}`,
          type: 'verse',
          title: `BG Chapter ${verse.chapter}, Verse ${verse.verse}`,
          subtitle: verse.englishTranslation.slice(0, 100) + '...',
          savedAt: Date.now(),
          verse,
        };
        return [newItem, ...prev];
      }
    });
  };

  const toggleAnswerBookmark = (answer: AssistantAnswer, userQuestion: string) => {
    setBookmarks((prev) => {
      const exists = prev.some(
        (b) => b.type === 'assistant_answer' && b.assistantAnswer?.summary === answer.summary
      );
      if (exists) {
        return prev.filter(
          (b) => !(b.type === 'assistant_answer' && b.assistantAnswer?.summary === answer.summary)
        );
      } else {
        const newItem: BookmarkItem = {
          id: `bm-answer-${Date.now()}`,
          type: 'assistant_answer',
          title: userQuestion ? `Q: ${userQuestion.slice(0, 70)}` : 'Gita Guidance',
          subtitle: answer.summary.slice(0, 100) + '...',
          savedAt: Date.now(),
          assistantAnswer: answer,
          userQuestion,
        };
        return [newItem, ...prev];
      }
    });
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const clearAllBookmarks = () => {
    setBookmarks([]);
  };

  return {
    bookmarks,
    isVerseBookmarked,
    isAnswerBookmarked,
    toggleVerseBookmark,
    toggleAnswerBookmark,
    removeBookmark,
    clearAllBookmarks,
  };
}
