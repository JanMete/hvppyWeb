import style from './about.module.css';
import BACKGROUND from '../../assets/About/aboutBackground.svg';
import { useTranslation } from 'react-i18next';
import { useWindowSizeAndScroll } from '../../hooks/useWindowSizeAndScroll';
import { useLocation } from 'react-router-dom';
import { useGetImages } from '../../hooks/useGetImages';
import LoaderErrorContainer from '../../Components/loaderErrorContainer/loaderErrorContainer';
import Loader from '../../Components/loader/Loader';
import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { ImageWithCaption } from '../../types/imageWithCaption';

export default function About() {
  const aboutImagesContainerRef = useRef(null);
  const textArticleContainerRef = useRef(null);

  const isAboutImagesContainerRefVisible = useIntersectionObserver(
    aboutImagesContainerRef
  );
  const isTextArticleContainerRef = useIntersectionObserver(
    textArticleContainerRef
  );

  const location = useLocation().pathname;
  const [t] = useTranslation('global');

  const { windowSize } = useWindowSizeAndScroll();
  const isMobile = windowSize[0] < 800;

  const { data, isLoading } = useGetImages({ location });

  const defaultImage: ImageWithCaption = { src: '', alt: '' };

  const firstImage = data?.[0] ?? defaultImage;
  const secondImage = data?.[1] ?? defaultImage;

  return (
    <section className={style.mainContainer}>
      <img
        src={BACKGROUND}
        className={style.aboutBackgroundImg}
        alt='background'
      />

      <article className={style.imageArticleContainer}>
        <div
          ref={aboutImagesContainerRef}
          className={`${style.aboutImagesContainer} ${
            isAboutImagesContainerRefVisible
              ? 'animate__animated animate__fadeInLeft'
              : ''
          }`}
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
                alt={firstImage.alt}
              />
            )}
            <img
              className={style.aboutImg2}
              src={secondImage.src}
              alt={secondImage.alt}
            />
          </>
        </div>
      </article>

      <article
        ref={textArticleContainerRef}
        className={`${style.textArticleContainer} ${
          isTextArticleContainerRef
            ? 'animate__animated animate__fadeInRight'
            : ''
        }`}
      >
        <div className={style.text}>
          <h1>{t('about.youre probably wondering...')}</h1>
          <h3>{t('about.as we all know, happy...')}</h3>
          <p>{t('about.when we turn such a smiling face...')}</p>
        </div>
      </article>
    </section>
  );
}
