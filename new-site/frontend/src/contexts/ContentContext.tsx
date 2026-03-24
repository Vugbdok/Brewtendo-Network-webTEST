'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'guide' | 'guide_1' | 'guide_2' | 'guide_3' | 'badgearcade' | 'other' | 'progress';

interface ContentContextType {
  currentPage: Page;
  changeContent: (page: Page) => void;
  playAudio: (audio: string) => void;
  swapStyleSheet: (sheet: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const changeContent = (page: Page) => {
    setCurrentPage(page);
  };

  const playAudio = (audio: string) => {
    const audioElement = document.getElementById(audio) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
    }
  };

  const swapStyleSheet = (sheet: string) => {
    const link = document.getElementById('pagestyle') as HTMLLinkElement;
    if (link) {
      link.href = sheet;
    }
  };

  return (
    <ContentContext.Provider value={{ currentPage, changeContent, playAudio, swapStyleSheet }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}