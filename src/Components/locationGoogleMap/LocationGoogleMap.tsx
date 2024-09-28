import { useRef } from 'react';
import style from './locationGoogleMap.module.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useWindowSizeAndScroll } from '../../hooks/useWindowSizeAndScroll';

export default function LocationGoogleMap() {
  const { windowSize } = useWindowSizeAndScroll();
  const isMobile = windowSize[0] < 800;

  const mapRef = useRef<HTMLDivElement>(null);
  const isMapVisible = useIntersectionObserver(mapRef);

  return (
    <article
      className={`${style.mapArticleContainer} ${
        isMapVisible && !isMobile ? 'animate__animated animate__fadeInLeft' : ''
      } ${isMapVisible && isMobile ? 'animate__animated animate__fadeIn' : ''}`}
      ref={mapRef}
    >
      <div className={style.iframeContainer}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.2209756295504!2d19.927753369678012!3d50.06973585901462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b008149a3c5%3A0x2f0523177ae265b!2sBlack%20mood%20Tattoo%20Studio!5e0!3m2!1spl!2spl!4v1705498982989!5m2!1spl!2spl'
          frameBorder='0'
          className={style.iframe}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </article>
  );
}
