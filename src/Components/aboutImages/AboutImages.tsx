import { useLocation } from 'react-router-dom';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useWindowSizeAndScroll } from '../../hooks/useWindowSizeAndScroll';
import { ImageWithCaption } from '../../types/imageWithCaption';
import { useGetImages } from '../../hooks/useGetImages';
import { useRef } from 'react';
import style from './aboutImages.module.css';
import LoaderErrorContainer from '../loaderErrorContainer/loaderErrorContainer';
import Loader from '../loader/Loader';
import { useTranslation } from 'react-i18next';

export default function AboutImages() {
  const [t] = useTranslation('global');
  const { windowSize } = useWindowSizeAndScroll();
  const location = useLocation().pathname;
  const aboutImagesContainerRef = useRef(null);
  const isAboutImagesContainerRefVisible = useIntersectionObserver(
    aboutImagesContainerRef
  );
  const { data, isLoading } = useGetImages({ location });

  const defaultImage: ImageWithCaption = { src: '', alt: '' };
  const firstImage = data?.[0] ?? defaultImage;
  const secondImage = data?.[1] ?? defaultImage;

  const isMobile = windowSize[0] < 1066;

  const animationStyles = isAboutImagesContainerRefVisible
    ? 'animate__animated animate__fadeInLeft'
    : '';

  return (
    <article className={style.imageArticleContainer}>
      <div
        ref={aboutImagesContainerRef}
        className={`${style.aboutImagesContainer} ${animationStyles}`}
      >
        {isLoading && (
          <LoaderErrorContainer withBackground={false}>
            <Loader />
          </LoaderErrorContainer>
        )}
        <>
          {!isMobile && (
            <img
              className={style.aboutImg1}
              src={firstImage.src}
              alt={firstImage.alt ?? t('alt.about')}
              loading='lazy'
            />
          )}
          <img
            className={style.aboutImg2}
            src={secondImage.src}
            alt={secondImage.alt ?? t('alt.about')}
            loading='lazy'
          />
        </>
      </div>
    </article>
  );
}
