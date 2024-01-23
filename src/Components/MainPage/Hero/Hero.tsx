import { useRef, useState, useEffect, useContext } from 'react';
import { scrollPositionContext } from '../../../contexts/scrollPositionContext';
import styles from './hero.module.css';

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

  return (
    <div className={styles.mainContainer}>
      <div
        ref={heroTextRef}
        className={`${styles.heroContainer} ${
          isHeroTextRefVisible ? 'opacity-1' : 'opacity-0'
        } ${hideHeroContainer ? styles.hideHeroContainer : ''}`}
      >
        <h2 className={styles.heroHeader}>
          Hi! My name is <span className={styles.hvppyHeader}>H∀PPY</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, at
          amet. Atque labore veniam cupiditate beatae quibusdam? Quos maiores
          suscipit provident illum possimus, debitis veritatis voluptates veniam
          perspiciatis doloribus inventore. Eaque alias soluta impedit
        </p>
      </div>
    </div>
  );
}
