import { useState, useEffect, useRef } from 'react';
import styles from './footer.module.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const [t] = useTranslation('global');
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFootRefVisible, setIsFootRefVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setIsFootRefVisible(entry.isIntersecting);
    });
    observer.observe(footerRef.current!);
  }, []);

  return (
    <div className={styles.footerContainer}>
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
  );
}
