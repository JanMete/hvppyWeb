import { useContext, useRef } from 'react';
import Loader from '../loader/Loader';
import LoaderErrorContainer from '../loaderErrorContainer/loaderErrorContainer';
import style from './aftercareSectionImg.module.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { ImageWithCaption } from '../../types/imageWithCaption';
import { useTranslation } from 'react-i18next';
import { IsLoadingContext } from '../../contexts/IsLoadingContext';

type AftercareSectionImgProps = {
  img: ImageWithCaption;
  reversed: boolean;
};

export default function AftercareSectionImg({
  img,
  reversed,
}: AftercareSectionImgProps) {
  const { isLoading } = useContext(IsLoadingContext);
  const [t] = useTranslation('global');
  const imageRef = useRef<HTMLDivElement | null>(null);
  const isImageVisible = useIntersectionObserver(imageRef);

  const animationClass = isImageVisible
    ? reversed
      ? 'animate__animated animate__fadeInRight'
      : 'animate__animated animate__fadeInLeft'
    : '';

  return (
    <figure
      ref={imageRef}
      className={`${style.imageContainer} ${animationClass}`}
    >
      {isLoading ? (
        <LoaderErrorContainer withBackground={false}>
          <Loader />
        </LoaderErrorContainer>
      ) : (
        <img
          src={img.src}
          alt={img.alt || t('alt.aftercare')}
          className={style.image}
          loading='lazy'
        />
      )}
    </figure>
  );
}
