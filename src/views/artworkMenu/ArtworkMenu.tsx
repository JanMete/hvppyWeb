import style from './artworkMenu.module.css';
import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import artworkCategories from '../../constants/artoworkCategories';
import { useLocation } from 'react-router-dom';
import { useGetImages } from '../../hooks/useGetImages';
import Loader from '../../Components/loader/Loader';
import LoaderErrorContainer from '../../Components/loaderErrorContainer/loaderErrorContainer';
import { ImageWithCaption } from '../../types/imageWithCaption';

export default function ArtworkMenu() {
  const location = useLocation().pathname;
  const { data = [], isLoading } = useGetImages({ location });

  const categoryRef = useRef<HTMLDivElement>(null);
  const isCategoryVisible = useIntersectionObserver(categoryRef);

  const defaultImage: ImageWithCaption = { src: '', alt: '' };

  return (
    <section
      ref={categoryRef}
      className={`${style.menuContainer} ${style.pink}`}
    >
      {artworkCategories.map(({ path }, index) => {
        const image = data[index] ?? defaultImage;

        return (
          <div
            key={index}
            className={`${style.categoryContainer} ${
              isCategoryVisible ? 'animate__animated animate__fadeIn' : ''
            }`}
          >
            <a href={path}>
              <div className={style.categoryModal}></div>
              {isLoading ? (
                <LoaderErrorContainer withBackground={false}>
                  <Loader />
                </LoaderErrorContainer>
              ) : (
                <img
                  className={style.categoryImage}
                  src={image.src}
                  alt={image.alt}
                />
              )}
            </a>
          </div>
        );
      })}
    </section>
  );
}
