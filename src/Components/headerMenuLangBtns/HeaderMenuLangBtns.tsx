import styleMobile from './mobileMenuLangBtns.module.css';
import styleWeb from './webHeaderLangBtns.module.css';
import { useLanguageSwitcher } from '../../hooks/useLanguageSwitcher';
import { langBtns } from '../../constants/langBtns';

type HeaderMenuLangBtnsProps = {
  isMobile: boolean;
};

export default function HeaderMenuLangBtns({
  isMobile,
}: HeaderMenuLangBtnsProps) {
  const { activeLanguage, handleChangeLanguage } = useLanguageSwitcher();

  const style = isMobile ? styleMobile : styleWeb;

  return (
    <div className={style.btnsContainer}>
      {langBtns.map(({ btnName }) => {
        return (
          <button
            key={btnName}
            className={`${style.langBtn} ${
              activeLanguage === btnName ? style.activeLang : ''
            }`}
            onClick={() => handleChangeLanguage(btnName)}
          >
            {btnName.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
