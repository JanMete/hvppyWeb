import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import {
  tattoos1,
  tattoos2,
  designes1,
  designes2,
} from '../../../utils/images';
import styles from './gallery.module.css';
import { categories } from '../../../utils/categories';
import { useEffect, useState } from 'react';

export default function Gallery() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { category } = useParams();

  let imagesToDisplay1: { img: string }[] = [];
  let imagesToDisplay2: { img: string }[] = [];

  if (category === 'tattoos') {
    imagesToDisplay1 = [...tattoos1];
    imagesToDisplay2 = [...tattoos2];
  } else if (category === 'designes') {
    imagesToDisplay1 = [...designes1];
    imagesToDisplay2 = [...designes2];
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    if (scrollPosition > 600) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  function handleScroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className={styles.galleryContainer}>
      <div>
        <ul className={styles.categoriesList}>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <Link className={styles.categoriesListItem} to={category.patch}>
                  {category.categoryName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.photosContainer}>
        <div className={styles.photosColumn}>
          {imagesToDisplay1.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.img} alt='' />
              </div>
            );
          })}
        </div>
        <div className={styles.photosColumn}>
          {imagesToDisplay2.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.img} alt='' />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`${styles.scrollButtonContaier} ${
          showScrollButton ? styles.showElement : ''
        }`}
      >
        <button onClick={handleScroll} className={`${styles.topButton} `}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
}
