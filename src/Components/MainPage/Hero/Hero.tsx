import { useRef, useState, useEffect } from 'react';
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

  return (
    <div className={styles.mainContainer}>
      <div
        ref={heroTextRef}
        className={`${styles.heroContainer} ${
          isHeroTextRefVisible ? 'opacity-1' : 'opacity-0'
        }`}
      >
        <h2 className={styles.heroHeader}>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, at
          amet. Atque labore veniam cupiditate beatae quibusdam? Quos maiores
          suscipit provident illum possimus, debitis veritatis voluptates veniam
          perspiciatis doloribus inventore. Eaque alias soluta impedit
          architecto quam ullam iste ipsum quisquam consequatur! Nesciunt
          explicabo illo mollitia, eius cum praesentium, inventore dolores,
          autem voluptatibus incidunt aperiam excepturi ut fugit nam natus sunt?
        </p>
      </div>
    </div>
  );
}
