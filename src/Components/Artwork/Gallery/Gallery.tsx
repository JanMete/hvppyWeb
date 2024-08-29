import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useParams } from 'react-router-dom';
import styles from './gallery.module.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetHomeData } from '../../../hooks/useLoadImages';

export default function Gallery() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { category } = useParams();
  const { firstArray, secondArray, isLoading, error } = useGetHomeData({
    category,
  });

  const imagesToDisplay1 = firstArray.map((url) => ({ img: url }));
  const imagesToDisplay2 = secondArray.map((url) => ({ img: url }));

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      setShowScrollButton(window.pageYOffset > 600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [t] = useTranslation('global');

  const categories = [
    { categoryName: t('categories.tattoos'), path: '/artwork/tattoos' },
    { categoryName: t('categories.designes'), path: '/artwork/designes' },
    { categoryName: t('categories.clothes'), path: '/artwork/clothes' },
    { categoryName: t('categories.other'), path: '/artwork/other' },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading images</div>;
  }

  return (
    <section className={styles.galleryContainer}>
      <article>
        <ul className={styles.categoriesList}>
          {categories.map(({ categoryName, path }, index) => (
            <li key={index}>
              <NavLink className={styles.categoriesListItem} to={path}>
                {categoryName}
              </NavLink>
            </li>
          ))}
        </ul>
      </article>
      <article className={styles.photosContainer}>
        <div className={styles.photosColumn}>
          {imagesToDisplay1.map((image, index) => (
            <div key={index}>
              <img src={image.img} alt='' />
            </div>
          ))}
        </div>
        <div className={styles.photosColumn}>
          {imagesToDisplay2.map((image, index) => (
            <div key={index}>
              <img src={image.img} alt='' />
            </div>
          ))}
        </div>
      </article>

      <article
        className={`${styles.scrollButtonContaier} ${
          showScrollButton ? styles.showElement : ''
        }`}
      >
        <button onClick={handleScrollToTop} className={`${styles.topButton} `}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </article>
    </section>
  );
}
