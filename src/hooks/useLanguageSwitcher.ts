import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ActiveLanguageStateContext } from '../contexts/ActiveLanguageStateContext';

export const useLanguageSwitcher = () => {
  const context = useContext(ActiveLanguageStateContext);

  if (!context) {
    throw new Error(
      'useLanguageSwitcher must be used within ActiveLanguageStateContext.Provider'
    );
  }

  const [activeLanguage, setActiveLanguage] = context;
  const [, i18n] = useTranslation('global');

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
    localStorage.setItem('lang', JSON.stringify(lang));
  };

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem('lang')!);
    if (lang) {
      setActiveLanguage(lang);
    } else {
      setActiveLanguage('pl');
    }
  }, [setActiveLanguage]);

  return {
    activeLanguage,
    handleChangeLanguage,
  };
};
