import type { ReactNode } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations, type TranslationKey } from '../data/translations';
import { LanguageContext } from './languageContextDef';

export { LanguageContext, type LanguageContextType } from './languageContextDef';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { language, toggle, setLanguage } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggle, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
