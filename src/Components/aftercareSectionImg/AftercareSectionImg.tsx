import { useRef } from 'react';
import Loader from '../loader/Loader';
import LoaderErrorContainer from '../loaderErrorContainer/loaderErrorContainer';
import style from './aftercareSectionImg.module.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { ImageWithCaption } from '../../types/imageWithCaption';

type AftercareSectionImgProps = {
  img: ImageWithCaption;
  isLoading: boolean;
  reversedStyling: boolean;
};

export default function AftercareSectionImg({
  img,
  isLoading,
  reversedStyling,
}: AftercareSectionImgProps) {
  const imageRef = useRef(null);
  const isImageVisible = useIntersectionObserver(imageRef);

  const animationClass = isImageVisible
    ? reversedStyling
      ? 'animate__animated animate__fadeInRight'
      : 'animate__animated animate__fadeInLeft'
    : '';

  return (
    <div ref={imageRef} className={`${style.imageContainer} ${animationClass}`}>
      {isLoading ? (
        <LoaderErrorContainer isGallery={false}>
          <Loader />
        </LoaderErrorContainer>
      ) : (
        <img src={img.src} alt={img.alt} className={style.image} />
      )}
    </div>
  );
}
