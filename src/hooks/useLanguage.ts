import { useEffect, useState } from 'react';

export type Language = 'pt-BR' | 'en-US';

const STORAGE_KEY = 'portfolio-language';

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored === 'pt-BR' || stored === 'en-US') return stored;
  
  // Detect browser language
  const browserLang = navigator.language;
  if (browserLang.startsWith('pt')) return 'pt-BR';
  return 'en-US';
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggle = () => setLanguage((prev) => (prev === 'pt-BR' ? 'en-US' : 'pt-BR'));

  return { language, setLanguage, toggle };
}
