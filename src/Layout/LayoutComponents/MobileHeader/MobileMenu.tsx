import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { sections } from '../../../utils/sections';
import LOGO from '../../../assets/homeLogo.jpg';
import styles from './mobileHeader.module.css';

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
};

export default function MobileMenu({ isMobileMenuOpen }: MobileMenuProps) {
  return (
    <div
      className={`${styles.mobileMenuContainer} ${
        isMobileMenuOpen ? styles.mobileMenuContainerOpened : ''
      }`}
    >
      {/* LOGO */}

      <div className={`${styles.logoContainer}`}>
        <Link to='/'>
          <img src={LOGO} alt='Logo portrait of artist' />
        </Link>
      </div>

      {/* LINKS */}

      <ul>
        <li className={styles.link}>
          <Link to='/'>{sections[0].sectionName.toUpperCase()}</Link>
        </li>
        <li className={styles.link}>
          <Link to='/'>{sections[1].sectionName.toUpperCase()}</Link>
        </li>
        <li className={styles.link}>
          <Link to='/'>{sections[2].sectionName.toUpperCase()}</Link>
        </li>
      </ul>

      {/* ICONS */}

      <div className={styles.iconsContainer}>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/hvppytattoo'
        >
          <FontAwesomeIcon icon={faFacebook} style={{ color: '#FFF' }} />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/hvppy_tattoo/'
        >
          <FontAwesomeIcon icon={faInstagram} style={{ color: '#FFF' }} />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.tiktok.com/@hvppy_art?lang=pl-PL'
        >
          <FontAwesomeIcon icon={faTiktok} style={{ color: '#FFF' }} />
        </a>
      </div>

      {/* ICONS END */}
    </div>
  );
}
