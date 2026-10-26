import { useState, useEffect, useCallback, useRef } from 'react';
import { TabType, LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES, getStoredLanguage, saveStoredLanguage } from '../data/languages';
import { getChapterByNumber } from '../data/chaptersData';
import { getTranslation } from '../i18n/translations';

export interface RouteState {
  lang: LanguageCode;
  tab: TabType;
  chapter?: number;
  verse?: number;
}

export function parsePathname(pathname: string): RouteState {
  // Normalize pathname: remove leading and trailing slashes
  const segments = pathname.split('/').filter(Boolean);

  let lang: LanguageCode = getStoredLanguage();
  let tab: TabType = 'home';
  let chapter: number | undefined;
  let verse: number | undefined;

  let offset = 0;
  if (segments.length > 0 && segments[0] in SUPPORTED_LANGUAGES) {
    lang = segments[0] as LanguageCode;
    offset = 1;
  }

  const remaining = segments.slice(offset);

  if (remaining.length === 0) {
    tab = 'home';
  } else if (remaining[0] === 'daily') {
    tab = 'daily';
  } else if (remaining[0] === 'assistant') {
    tab = 'assistant';
  } else if (remaining[0] === 'explorer') {
    tab = 'explorer';
  } else if (remaining[0] === 'bookmarks') {
    tab = 'bookmarks';
  } else if (remaining[0] === 'chapters' && remaining.length >= 4 && remaining[2] === 'verses') {
    const chNum = parseInt(remaining[1], 10);
    const vNum = parseInt(remaining[3], 10);
    if (!isNaN(chNum) && !isNaN(vNum)) {
      tab = 'daily';
      chapter = chNum;
      verse = vNum;
    }
  } else if (remaining[0] === 'home') {
    tab = 'home';
  }

  return { lang, tab, chapter, verse };
}

export function formatUrl(route: RouteState): string {
  const { lang, tab, chapter, verse } = route;
  if (chapter !== undefined && verse !== undefined) {
    return `/${lang}/chapters/${chapter}/verses/${verse}`;
  }
  if (tab === 'home') {
    return `/${lang}`;
  }
  return `/${lang}/${tab}`;
}

export function useAppRouting() {
  const [route, setRoute] = useState<RouteState>(() => {
    if (typeof window === 'undefined') {
      return { lang: 'en', tab: 'home' };
    }
    const initial = parsePathname(window.location.pathname);
    return initial;
  });

  const isNavigatingRef = useRef(false);

  // Update document title and metadata dynamically for search-engine friendliness & SEO
  const updateMetaTags = useCallback((currentRoute: RouteState) => {
    if (typeof document === 'undefined') return;
    const t = getTranslation(currentRoute.lang);
    let title = `${t.appTitle} — ${t.appSubtitle}`;

    if (currentRoute.chapter && currentRoute.verse) {
      const ch = getChapterByNumber(currentRoute.chapter);
      const chTitle = ch ? (ch.titles[currentRoute.lang] || ch.titles.en) : `Chapter ${currentRoute.chapter}`;
      title = `${t.chapterLabel} ${currentRoute.chapter}, ${t.verseLabel} ${currentRoute.verse} | ${chTitle} - ${t.appTitle}`;
    } else if (currentRoute.tab === 'daily') {
      title = `${t.dailyWisdomTitle} | ${t.appTitle}`;
    } else if (currentRoute.tab === 'assistant') {
      title = `${t.assistantTitle} | ${t.appTitle}`;
    } else if (currentRoute.tab === 'explorer') {
      title = `${t.explorerTitle} | ${t.appTitle}`;
    } else if (currentRoute.tab === 'bookmarks') {
      title = `${t.bookmarksTitle} | ${t.appTitle}`;
    }

    document.title = title;

    // Sync html lang and dir attribute
    const langConfig = SUPPORTED_LANGUAGES[currentRoute.lang] || SUPPORTED_LANGUAGES.en;
    document.documentElement.lang = currentRoute.lang;
    document.documentElement.dir = langConfig.direction;
  }, []);

  // Listen to browser popstate (back / forward buttons)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      const parsed = parsePathname(window.location.pathname);
      setRoute(parsed);
      saveStoredLanguage(parsed.lang);
      updateMetaTags(parsed);
    };

    window.addEventListener('popstate', handlePopState);

    // Initial title & meta sync
    updateMetaTags(route);

    // If initial URL is bare root '/', normalize to '/{lang}'
    if (window.location.pathname === '/' || window.location.pathname === '') {
      const initialUrl = formatUrl(route);
      window.history.replaceState(null, '', initialUrl);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [route, updateMetaTags]);

  // Navigate to tab
  const navigateToTab = useCallback(
    (tab: TabType, langOverride?: LanguageCode) => {
      const nextLang = langOverride || route.lang;
      const nextRoute: RouteState = { lang: nextLang, tab };
      const nextUrl = formatUrl(nextRoute);

      if (window.location.pathname !== nextUrl) {
        window.history.pushState(null, '', nextUrl);
      }
      setRoute(nextRoute);
      updateMetaTags(nextRoute);
    },
    [route.lang, updateMetaTags]
  );

  // Navigate to specific verse
  const navigateToVerse = useCallback(
    (chapter: number, verse: number, langOverride?: LanguageCode) => {
      const nextLang = langOverride || route.lang;
      const nextRoute: RouteState = {
        lang: nextLang,
        tab: 'daily',
        chapter,
        verse,
      };
      const nextUrl = formatUrl(nextRoute);

      if (window.location.pathname !== nextUrl) {
        window.history.pushState(null, '', nextUrl);
      }
      setRoute(nextRoute);
      updateMetaTags(nextRoute);
    },
    [route.lang, updateMetaTags]
  );

  // Switch language while strictly PRESERVING current route parameters (including chapter and verse)
  const switchLanguage = useCallback(
    (newLang: LanguageCode) => {
      saveStoredLanguage(newLang);
      const nextRoute: RouteState = {
        ...route,
        lang: newLang,
      };
      const nextUrl = formatUrl(nextRoute);

      if (window.location.pathname !== nextUrl) {
        window.history.pushState(null, '', nextUrl);
      }
      setRoute(nextRoute);
      updateMetaTags(nextRoute);
    },
    [route, updateMetaTags]
  );

  return {
    route,
    currentLanguage: route.lang,
    activeTab: route.tab,
    selectedChapter: route.chapter,
    selectedVerse: route.verse,
    navigateToTab,
    navigateToVerse,
    switchLanguage,
  };
}
