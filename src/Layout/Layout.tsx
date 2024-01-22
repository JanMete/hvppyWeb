import WebHeader from './LayoutComponents/WebHeader/WebHeader';
import MobileHeader from './LayoutComponents/MobileHeader/MobileHeader';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import Footer from './LayoutComponents/Footer/Footer';
import { scrollPositionContext } from '../contexts/scrollPositionContext';

export default function Layout() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = windowSize[0] < 800;

  return (
    <div className={styles.layout}>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <WebHeader scrollPosition={scrollPosition} />
      )}
      <scrollPositionContext.Provider value={scrollPosition}>
        <Outlet />
      </scrollPositionContext.Provider>
      <Footer />
    </div>
  );
}
