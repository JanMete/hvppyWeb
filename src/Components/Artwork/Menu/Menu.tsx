import styles from './menu.module.css';
import { categories } from '../../../utils/categories';
import { useEffect, useRef, useState } from 'react';

export default function Menu() {
  const categoryRef = useRef<HTMLDivElement>(null);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  useEffect(() => {
    const categoryObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsCategoryVisible(entry.isIntersecting);
    });

    if (categoryRef.current) {
      categoryObserver.observe(categoryRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (categoryRef.current) {
        categoryObserver.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div
        ref={categoryRef}
        className={`${styles.menuContainer} ${styles.pink}`}
      >
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={`${styles.categoryContainer} ${
                isCategoryVisible ? styles.showElement : ''
              }`}
            >
              <div className={styles.categoryContentContainer}>
                <a href={category.patch}>
                  <div className={styles.categoryContainerModal}>
                    {category.categoryName}
                  </div>
                  <img
                    className={styles.categoryImage}
                    src={category.img}
                    alt={category.img}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
