import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import LOGO from '../../../assets/MainPage/homeLogo.png';
import { sections } from '../../../utils/sections';
import styles from './mobileHeader.module.css';
import { useContext } from 'react';
import { activeLanguageContext } from '../../../contexts/activeLanguageContext';
import { setActiveLanguageContext } from '../../../contexts/setActiveLanguageContext';

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
        <li className={styles.link}>
          <NavLink onClick={scrollToTopCloseMenu} to={sections[0].path}>
            {sections[0].sectionName.toUpperCase()}
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink onClick={scrollToTopCloseMenu} to={sections[1].path}>
            {sections[1].sectionName.toUpperCase()}
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink onClick={scrollToTopCloseMenu} to={sections[2].path}>
            {sections[2].sectionName.toUpperCase()}
          </NavLink>
        </li>
      </ul>

      {/* ICONS */}
      <div className={styles.iconsLangContainer}>
        <div className={styles.iconsContainer}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/hvppytattoo'
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/hvppy_tattoo/'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.tiktok.com/@hvppy_art?lang=pl-PL'
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
        <div className={styles.langButtons}>
          <button
            className={`${activeLanguage === 'pl' ? styles.activeLang : ''}`}
            onClick={() => handleChangeLanguage('pl')}
          >
            PL
          </button>
          <button
            className={`${activeLanguage === 'en' ? styles.activeLang : ''}`}
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
