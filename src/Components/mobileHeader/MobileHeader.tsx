import { useState } from 'react';
import styles from './mobileHeader.module.css';
import MobileMenu from '../mobileMenu/MobileMenu';
import MobileMenuButton from '../mobileMenuButton/MobileMenuButton';

export default function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className={styles.navContainer}>
        <MobileMenuButton
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <MobileMenu
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </nav>
    </header>
  );
}
