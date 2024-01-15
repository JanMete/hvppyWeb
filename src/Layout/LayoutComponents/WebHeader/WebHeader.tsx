import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../../../assets/homeLogo.jpg';
import { sections } from '../../../utils/sections';
import { useEffect, useRef, useState } from 'react';
import styles from './webHeader.module.css';

type WebHeaderProps = {
  scrollPosition: number;
};

export default function WebHeader({ scrollPosition }: WebHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollExceededHeader, setScrollExceededHeader] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      if (scrollPosition > headerRef.current.getBoundingClientRect().height) {
        setScrollExceededHeader(true);
      } else {
        setScrollExceededHeader(false);
      }
    }
  }, [scrollPosition]);

  return (
    <header className={styles.headerContainer}>
      <nav
        ref={headerRef}
        className={`${styles.navContainer}${
          scrollExceededHeader ? ` ${styles.darkenNav}` : ''
        }`}
      >
        {/* FIRST PART OF NAVIGATION */}
        <div>
          <NavLink to='/'>{sections[0].sectionName.toUpperCase()}</NavLink>
        </div>
        <div>
          <NavLink to='/'>{sections[1].sectionName.toUpperCase()}</NavLink>
        </div>
        {/* LOGO */}
        <div
          className={`${styles.logoContainer}${
            scrollExceededHeader ? ` ${styles.smallerLogo}` : ''
          }`}
        >
          <Link to='/'>
            <img src={LOGO} alt='Logo portrait of artist' />
          </Link>
        </div>

        {/* SECOND PART OF NAVIGATION */}
        <div>
          <NavLink to='/'>{sections[2].sectionName.toUpperCase()}</NavLink>
        </div>
        {/* SOCIAL LINKS */}
        <div>
          <ul className={styles.iconsList}>
            <li className={styles.icon}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/hvppytattoo'
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className={styles.icon}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/hvppy_tattoo/'
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className={styles.icon}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.tiktok.com/@hvppy_art?lang=pl-PL'
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
