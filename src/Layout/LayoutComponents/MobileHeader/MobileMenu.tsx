import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LOGO from '../../../assets/MainPage/homeLogo.png';
import { sections } from '../../../utils/sections';
import styles from './mobileHeader.module.css';
import { useContext } from 'react';
import { activeLanguageContext } from '../../../contexts/activeLanguageContext';
import { setActiveLanguageContext } from '../../../contexts/setActiveLanguageContext';
import { socialMediaLinks } from '../../../utils/socialMedia';

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) => {
  const activeLanguage = useContext(activeLanguageContext);
  const setActiveLanguage = useContext(setActiveLanguageContext);

  const scrollToTopCloseMenu = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [, i18n] = useTranslation('global');
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`${styles.mobileMenuContainer} ${
        isMobileMenuOpen ? styles.mobileMenuContainerOpened : ''
      }`}
    >
      {/* LOGO */}

      <div className={`${styles.logoContainer}`}>
        <Link onClick={scrollToTopCloseMenu} to='/'>
          <img src={LOGO} alt='Logo portrait of artist' />
        </Link>
      </div>

      {/* LINKS */}

      <ul>
        {sections.map(({ path, sectionName }, index) => {
          return (
            <li key={index} className={styles.link}>
              <NavLink onClick={scrollToTopCloseMenu} to={path}>
                {sectionName.toUpperCase()}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* ICONS */}
      <div className={styles.iconsLangContainer}>
        <div className={styles.iconsContainer}>
          {socialMediaLinks.map(({ icon, link }, index) => {
            return (
              <a
                key={index}
                target='_blank'
                rel='noopener noreferrer'
                href={link}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            );
          })}
        </div>
        <div className={styles.langButtons}>
          <button
            className={`${styles.langBtn} ${
              activeLanguage === 'pl' ? styles.activeLang : ''
            }`}
            onClick={() => handleChangeLanguage('pl')}
          >
            PL
          </button>
          <button
            className={`${styles.langBtn} ${
              activeLanguage === 'en' ? styles.activeLang : ''
            }`}
            onClick={() => handleChangeLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>

      {/* ICONS END */}
    </div>
  );
};

export default MobileMenu;
