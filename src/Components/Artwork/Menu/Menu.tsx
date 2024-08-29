import styles from './menu.module.css';
import { useRef } from 'react';
import clothesThumbnail from '../../../assets/Artwork Images/Thumbnails/clothesThumbnail.jpg';
import printsThumbnail from '../../../assets/Artwork Images/Thumbnails/printsThumbnail.jpg';
import tattoosThumbnail from '../../../assets/Artwork Images/Thumbnails/tattoosThumbnail.jpg';
import designsThumbnail from '../../../assets/Artwork Images/Thumbnails/designsThumbnail.jpg';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function Menu() {
  const categoryRef = useRef<HTMLDivElement>(null);
  const isCategoryVisible = useIntersectionObserver(categoryRef);

  const [t] = useTranslation('global');
  const categories = [
    {
      categoryName: t('categories.tattoos'),
      patch: '/artwork/tattoos',
      img: tattoosThumbnail,
      imgAlt: '',
    },
    {
      categoryName: t('categories.designes'),
      patch: '/artwork/designes',
      img: designsThumbnail,
      imgAlt: '',
    },
    {
      categoryName: t('categories.clothes'),
      patch: '/artwork/clothes',
      img: clothesThumbnail,
      imgAlt: '',
    },
    {
      categoryName: t('categories.other'),
      patch: '/artwork/other',
      img: printsThumbnail,
      imgAlt: '',
    },
  ];

  return (
    <section
      ref={categoryRef}
      className={`${styles.menuContainer} ${styles.pink}`}
    >
      {categories.map(({ patch, img }, index) => {
        return (
          <div
            key={index}
            className={`${styles.categoryContainer} ${
              isCategoryVisible ? styles.showElement : ''
            }`}
          >
            <div className={styles.categoryContentContainer}>
              <a href={patch}>
                <div className={styles.categoryContainerModal}></div>
                <img className={styles.categoryImage} src={img} alt={img} />
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
