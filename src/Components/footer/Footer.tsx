import { useRef } from 'react';
import style from './footer.module.css';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Footer() {
  const [t] = useTranslation('global');
  const footerRef = useRef<HTMLDivElement>(null);
  const isFootRefVisible = useIntersectionObserver(footerRef);
  const animationClass = isFootRefVisible
    ? 'animate__animated animate__fadeInUp'
    : '';

  return (
    <footer className={style.footerContainer}>
      <p
        ref={footerRef}
        className={`${animationClass} ${style.footerParagraph}`}
      >
        © {t('footer.author')}{' '}
        <a
          target='_blank'
          href='https://portfolio-janmete.netlify.app/'
          className={style.footerLink}
        >
          Jan Metelański
        </a>
      </p>
    </footer>
  );
}
