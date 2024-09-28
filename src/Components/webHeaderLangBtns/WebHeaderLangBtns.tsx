import { useLanguageSwitcher } from '../../hooks/useLanguageSwitcher';
import style from './webHeaderLangBtns.module.css';

export default function WebHeaderLangBtns() {
  const { activeLanguage, handleChangeLanguage } = useLanguageSwitcher();

  return (
    <div className={style.langButtonsContainer}>
      <button
        className={`${activeLanguage === 'pl' ? style.activeLang : ''}`}
        onClick={() => handleChangeLanguage('pl')}
      >
        PL
      </button>
      <button
        className={`${activeLanguage === 'en' ? style.activeLang : ''}`}
        onClick={() => handleChangeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}
