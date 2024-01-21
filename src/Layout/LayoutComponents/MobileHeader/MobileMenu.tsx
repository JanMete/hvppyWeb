import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { sections } from '../../../utils/sections';
import LOGO from '../../../assets/homeLogo.png';
import styles from './mobileHeader.module.css';

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) {
  const scrollToTopCloseMenu = () => {
    window.scrollTo(0, 0);
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

      {/* ICONS END */}
    </div>
  );
}
