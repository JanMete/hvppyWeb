import { useRef, useState, useEffect, useContext } from 'react';
import { scrollPositionContext } from '../../../contexts/scrollPositionContext';
import styles from './hero.module.css';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [isHeroTextRefVisible, setIsHeroTextRefVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsHeroTextRefVisible(entry.isIntersecting);
    });
    observer.observe(heroTextRef.current!);
  });

  const scrollPosotion = useContext(scrollPositionContext);
  const hideHeroContainer = scrollPosotion > 800;

  const [t] = useTranslation('global');

  return (
    <div className={styles.mainContainer}>
      <div
        ref={heroTextRef}
        className={`${styles.heroContainer} ${
          isHeroTextRefVisible ? 'opacity-1' : 'opacity-0'
        } ${hideHeroContainer ? styles.hideHeroContainer : ''}`}
      >
        <h1 className={styles.heroHeader}>
          {t('main.hero.hello1')}
          <span style={{ color: 'var(--hvppyYellow)' }}>
            {' '}
            {t('main.hero.hvppyTattoo')}
            {t('main.hero.website')}
          </span>
          {'!'}
        </h1>
        <h3 className={styles.heroHeader}>{t('main.hero.hello2')}</h3>
      </div>
    </div>
  );
}
