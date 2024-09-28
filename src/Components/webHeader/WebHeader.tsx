import { useEffect, useRef, useState } from 'react';
import styles from './webHeader.module.css';
import { firstNavPart, secondNavPart } from '../../constants/navItems';
import WebHeaderLogo from '../webHeaderLogo/WebHeaderLogo';
import WebHeaderSocialLinks from '../webHeaderSocialLinks/WebHeaderSocialLinks';
import { WebHeaderProps } from '../../types/webHeaderTypes';
import WebHeaderNavPart from '../webHeaderNavPart/WebHeaderNavPart';
import HeaderMenuLangBtns from '../headerMenuLangBtns/HeaderMenuLangBtns';

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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <nav
        ref={headerRef}
        className={`${styles.navContainer}${
          scrollExceededHeader ? ` ${styles.darkenNav}` : ''
        }`}
      >
        <WebHeaderNavPart navPart={firstNavPart} scrollToTop={scrollToTop} />
        <WebHeaderLogo
          scrollExceededHeader={scrollExceededHeader}
          scrollToTop={scrollToTop}
        />
        <WebHeaderNavPart navPart={secondNavPart} scrollToTop={scrollToTop} />
        <div className={styles.socialLangButtons}>
          <WebHeaderSocialLinks />
          <HeaderMenuLangBtns isMobile={false} />
        </div>
      </nav>
    </header>
  );
}
