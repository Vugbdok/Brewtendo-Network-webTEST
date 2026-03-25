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
    const allowedAudio = ['decide', 'background'];
    if (!allowedAudio.includes(audio)) {
      console.warn('Attempted to play unauthorized audio:', audio);
      return;
    }
    const audioElement = document.getElementById(audio) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const allowedSheets = ['/css/main.css', '/css/guide.css', '/globals.css'];

  const swapStyleSheet = (sheet: string) => {
    if (!allowedSheets.includes(sheet)) {
      console.warn('Attempted to load unauthorized stylesheet:', sheet);
      return;
    }
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