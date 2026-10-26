import { LanguageCode } from './data/languages';

export type { LanguageCode };

export interface VerseTranslation {
  translation: string;
  commentary?: string;
  practicalLesson?: string;
  context?: string;
}

export interface Verse {
  id: string;
  chapter: number;
  verse: number;
  chapterTitleSanskrit: string;
  chapterTitleEnglish: string;
  sanskrit: string;
  transliteration: string;
  wordMeanings?: string;
  englishTranslation: string;
  context: string;
  commentary: string;
  practicalLesson: string;
  topics: string[];
  translations?: Partial<Record<LanguageCode, VerseTranslation>>;
}

export function getVerseTranslation(verse: Verse, lang: LanguageCode): string {
  if (lang === 'en') return verse.englishTranslation;
  return verse.translations?.[lang]?.translation || verse.englishTranslation;
}

export function getVerseCommentary(verse: Verse, lang: LanguageCode): string {
  if (lang === 'en') return verse.commentary;
  return verse.translations?.[lang]?.commentary || verse.commentary;
}

export function getVerseLesson(verse: Verse, lang: LanguageCode): string {
  if (lang === 'en') return verse.practicalLesson;
  return verse.translations?.[lang]?.practicalLesson || verse.practicalLesson;
}

export function getVerseContext(verse: Verse, lang: LanguageCode): string {
  if (lang === 'en') return verse.context;
  return verse.translations?.[lang]?.context || verse.context;
}

export interface ScriptureReference {
  chapter: number;
  verse: number;
  sanskrit?: string;
  transliteration?: string;
  translation: string;
  context?: string;
  relevanceExplanation?: string;
}

export interface AssistantAnswer {
  summary: string;
  scriptureReferences: ScriptureReference[];
  teachingExplanation: string;
  practicalEverydayLesson: string;
  suggestedFollowUps?: string[];
  isAiGenerated: boolean;
  isClarification?: boolean;
  language?: LanguageCode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  assistantAnswer?: AssistantAnswer;
  language?: LanguageCode;
}

export interface BookmarkItem {
  id: string;
  type: 'verse' | 'assistant_answer';
  title: string;
  subtitle: string;
  savedAt: number;
  verse?: Verse;
  assistantAnswer?: AssistantAnswer;
  userQuestion?: string;
  language?: LanguageCode;
}

export type TabType = 'home' | 'daily' | 'assistant' | 'explorer' | 'bookmarks';
