import WebHeader from '../../Components/webHeader/WebHeader';
import MobileHeader from '../../Components/mobileHeader/MobileHeader';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import Footer from '../../Components/footer/Footer';
import { useWindowSizeAndScroll } from '../../hooks/useWindowSizeAndScroll';
import { useState } from 'react';
import { ActiveLanguageStateContext } from '../../contexts/ActiveLanguageStateContext';

export default function Layout() {
  const [activeLanguage, setActiveLanguage] = useState('pl');
  const { windowSize, scrollPosition } = useWindowSizeAndScroll();

  const isMobile = windowSize[0] < 800;

  return (
    <div className={styles.mainContainer}>
      <ActiveLanguageStateContext.Provider
        value={[activeLanguage, setActiveLanguage]}
      >
        {isMobile ? (
          <MobileHeader />
        ) : (
          <WebHeader scrollPosition={scrollPosition} />
        )}
        <Outlet />
      </ActiveLanguageStateContext.Provider>
      <Footer />
    </div>
  );
}
