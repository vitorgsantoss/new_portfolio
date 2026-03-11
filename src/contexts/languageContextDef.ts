import { createContext } from 'react';
import type { Language } from '../hooks/useLanguage';
import type { TranslationKey } from '../data/translations';

export interface LanguageContextType {
  language: Language;
  toggle: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
