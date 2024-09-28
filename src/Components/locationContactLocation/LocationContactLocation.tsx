import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useWindowSizeAndScroll } from '../../hooks/useWindowSizeAndScroll';
import style from './locationContactLocation.module.css';

export default function LocationContactLocation() {
  const { windowSize } = useWindowSizeAndScroll();
  const isMobile = windowSize[0] < 800;

  const localizationRef = useRef(null);
  const contactRef = useRef(null);
  const isLocalizationVisible = useIntersectionObserver(localizationRef);
  const isContactVisible = useIntersectionObserver(contactRef);
  return (
    <div className={style.contactMainContainer}>
      <div
        ref={localizationRef}
        className={`${style.contactContainer} ${
          isLocalizationVisible ? 'animate__animated animate__fadeInRight' : ''
        }`}
      >
        <h1>Lokalizacja</h1>
        <div>
          <p>Teofila Lenartowicza 7/7</p>
          <p>31-148 Kraków</p>
        </div>
      </div>
      <div
        ref={contactRef}
        className={`${style.contactContainer} ${
          isContactVisible && !isMobile
            ? 'animate__animated animate__fadeInRight'
            : ''
        } ${
          isContactVisible && isMobile
            ? 'animate__animated animate__fadeInLeft'
            : ''
        }`}
      >
        <h1>Kontakt</h1>
        <p>TATTOOHVPPY@GMAIL.COM</p>
      </div>
    </div>
  );
}
