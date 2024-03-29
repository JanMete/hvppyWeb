import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../../../assets/MainPage/homeLogo.png';
import { sections } from '../../../utils/sections';
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './webHeader.module.css';
import { useTranslation } from 'react-i18next';
import { activeLanguageContext } from '../../../contexts/activeLanguageContext';
import { setActiveLanguageContext } from '../../../contexts/setActiveLanguageContext';
import { socialMediaLinks } from '../../../utils/socialMedia';

type WebHeaderProps = {
  scrollPosition: number;
};

export default function WebHeader({ scrollPosition }: WebHeaderProps) {
  const activeLanguage = useContext(activeLanguageContext);
  const setActiveLanguage = useContext(setActiveLanguageContext);
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollExceededHeader, setScrollExceededHeader] = useState(false);

  const [t, i18n] = useTranslation('global');

  const chandleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
  };

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem('lang')!);
    if (lang) {
      setActiveLanguage(lang);
    } else {
      setActiveLanguage('pl');
    }
  }, [setActiveLanguage]);

  useEffect(() => {
    if (headerRef.current) {
      if (scrollPosition > headerRef.current.getBoundingClientRect().height) {
        setScrollExceededHeader(true);
      } else {
        setScrollExceededHeader(false);
      }
    }
    localStorage.setItem('lang', JSON.stringify(activeLanguage));
  }, [activeLanguage, scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className={styles.headerContainer}>
      <nav
        ref={headerRef}
        className={`${styles.navContainer}${
          scrollExceededHeader ? ` ${styles.darkenNav}` : ''
        }`}
      >
        {/* FIRST PART OF NAVIGATION */}
        <div className={styles.linkContainer}>
          <NavLink onClick={scrollToTop} to={sections[0].path}>
            {t('webHeader.category1')}
          </NavLink>
        </div>
        <div className={styles.linkContainer}>
          <NavLink onClick={scrollToTop} to={sections[1].path}>
            {t('webHeader.category2')}
          </NavLink>
        </div>
        {/* LOGO */}
        <div
          className={`${styles.linkContainer} ${
            scrollExceededHeader
              ? ` ${styles.smallerLogo}`
              : styles.logoContainer
          }`}
        >
          <Link onClick={scrollToTop} to='/'>
            <img src={LOGO} alt='Logo portrait of artist' />
          </Link>
        </div>

        {/* SECOND PART OF NAVIGATION */}
        <div className={styles.linkContainer}>
          <NavLink onClick={scrollToTop} to={sections[2].path}>
            {t('webHeader.category3')}
          </NavLink>
        </div>

        <div className={styles.socialLangButtons}>
          {/* SOCIAL LINKS */}
          <ul className={styles.iconsList}>
            {socialMediaLinks.map(({ icon, link }, index) => {
              return (
                <li key={index} className={styles.icon}>
                  <a target='_blank' rel='noopener noreferrer' href={link}>
                    <FontAwesomeIcon icon={icon} />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* LANGUAGE BUTTON */}
          <div className={styles.langButtons}>
            <button
              className={`${activeLanguage === 'pl' ? styles.activeLang : ''}`}
              onClick={() => chandleChangeLanguage('pl')}
            >
              PL
            </button>
            <button
              className={`${activeLanguage === 'en' ? styles.activeLang : ''}`}
              onClick={() => chandleChangeLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
