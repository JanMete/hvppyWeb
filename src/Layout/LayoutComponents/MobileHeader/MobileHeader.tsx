import { useState } from 'react';
import styles from './mobileHeader.module.css';
import MobileMenu from './MobileMenu';

export default function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log(isMobileMenuOpen);

  return (
    <header>
      <nav className={styles.navContainer}>
        {/* MENU BUTTON */}

        <div className={styles.menuButtonContainer}>
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={styles.menuButton}
          >
            <span
              className={`${styles.menuButtonItem} ${
                isMobileMenuOpen ? styles.menuButtonTopItemRotation : ''
              }`}
            ></span>
            <span
              className={`${styles.menuButtonItem} ${
                isMobileMenuOpen ? styles.menuButtonMiddleItemRotation : ''
              }`}
            ></span>
            <span
              className={`${styles.menuButtonItem} ${
                isMobileMenuOpen ? styles.menuButtonBottomItemRotation : ''
              }`}
            ></span>
          </button>
        </div>
        {/* MENU BUTTON END */}

        <MobileMenu
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </nav>
    </header>
  );
}
