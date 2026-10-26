import React from 'react';
import { Home, Sun, Bot, Bookmark, Compass } from 'lucide-react';
import { TabType, LanguageCode } from '../types';
import { getTranslation } from '../i18n/translations';

interface NavigationProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  bookmarkCount: number;
  currentLanguage: LanguageCode;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onSelectTab,
  bookmarkCount,
  currentLanguage,
}) => {
  const t = getTranslation(currentLanguage);

  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: number }[] = [
    {
      id: 'home',
      label: t.navHome,
      icon: <Home className="w-5 h-5" />,
    },
    {
      id: 'daily',
      label: t.navDaily,
      icon: <Sun className="w-5 h-5" />,
    },
    {
      id: 'assistant',
      label: t.navAssistant,
      icon: <Bot className="w-5 h-5" />,
    },
    {
      id: 'explorer',
      label: t.navExplorer,
      icon: <Compass className="w-5 h-5" />,
    },
    {
      id: 'bookmarks',
      label: t.navBookmarks,
      icon: <Bookmark className="w-5 h-5" />,
      badge: bookmarkCount > 0 ? bookmarkCount : undefined,
    },
  ];

  return (
    <>
      {/* Desktop Top Sub-Nav bar */}
      <nav className="hidden md:block bg-[#090e21] border-b border-amber-500/15 py-1 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-1.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'text-amber-300 bg-amber-500/15 shadow-[0_0_12px_rgba(245,158,11,0.15)] border border-amber-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500 text-slate-950">
                    {tab.badge}
                  </span>
                )}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b]" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Android & Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070b19]/95 backdrop-blur-lg border-t border-amber-500/20 px-2 py-1.5 safe-area-pb">
        <div className="grid grid-cols-5 gap-0.5 items-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex flex-col items-center justify-center py-1 px-0.5 rounded-xl transition-all relative ${
                  isActive ? 'text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div
                  className={`relative p-1 rounded-lg transition-transform ${
                    isActive
                      ? 'bg-amber-500/20 scale-105 shadow-[0_0_10px_rgba(245,158,11,0.25)] border border-amber-400/30'
                      : ''
                  }`}
                >
                  {tab.icon}
                  {tab.badge !== undefined && (
                    <span className="absolute -top-1 -right-1 px-1 py-0.2 rounded-full text-[9px] font-bold bg-amber-500 text-slate-950 leading-none min-w-[14px] text-center">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] tracking-tight mt-0.5 line-clamp-1 max-w-[65px] text-center">
                  {tab.label}
                </span>
                {isActive && (
                  <div className="w-3 h-0.5 bg-amber-400 rounded-full mt-0.5 shadow-[0_0_6px_#f59e0b]" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
