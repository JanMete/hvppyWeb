import { useRef } from 'react';
import styles from './footer.module.css';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function Footer() {
  const [t] = useTranslation('global');
  const footerRef = useRef<HTMLDivElement>(null);
  const isFootRefVisible = useIntersectionObserver(footerRef);

  return (
    <footer className={styles.footerContainer}>
      <div>
        {' '}
        <p
          ref={footerRef}
          className={`${
            isFootRefVisible ? styles.showFooter : styles.hideFooter
          }`}
        >
          © {t('footer.author')}{' '}
          <a target='_blank' href='https://portfolio-janmete.netlify.app/'>
            Jan Metelański
          </a>
        </p>
      </div>
    </footer>
  );
}
