import styles from './menu.module.css';
import { useRef } from 'react';
import hvppyThumbnail from '../../../assets/Artwork Images/Thumbnails/hvppyThumbnail.jpeg';
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
      img: hvppyThumbnail,
      imgAlt: '',
    },
    {
      categoryName: t('categories.designes'),
      patch: '/artwork/designes',
      img: hvppyThumbnail,
      imgAlt: '',
    },
    {
      categoryName: t('categories.clothes'),
      patch: '/artwork/clothes',
      img: hvppyThumbnail,
      imgAlt: '',
    },
    {
      categoryName: t('categories.other'),
      patch: '/artwork/other',
      img: hvppyThumbnail,
      imgAlt: '',
    },
  ];

  return (
    <>
      <div
        ref={categoryRef}
        className={`${styles.menuContainer} ${styles.pink}`}
      >
        {categories.map(({ categoryName, patch, img }, index) => {
          return (
            <div
              key={index}
              className={`${styles.categoryContainer} ${
                isCategoryVisible ? styles.showElement : ''
              }`}
            >
              <div className={styles.categoryContentContainer}>
                <a href={patch}>
                  <div className={styles.categoryContainerModal}>
                    {categoryName}
                  </div>
                  <img className={styles.categoryImage} src={img} alt={img} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
