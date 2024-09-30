import { MutableRefObject } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import style from './attributeIcon.module.css';
import { ImageWithCaption } from '../../types/imageWithCaption';

type AttributeIconProps = {
  section: MutableRefObject<null>;
  image: ImageWithCaption;
};

export default function AttributeIcon({ section, image }: AttributeIconProps) {
  const isSectionVisible = useIntersectionObserver(section);
  const animationClass = isSectionVisible
    ? 'animate__animated animate__fadeIn'
    : '';
  return (
    <article
      ref={section}
      className={`${style.iconContainer} ${animationClass}`}
    >
      <img
        className={`${style.image} ${style.secondImage}`}
        srcSet={`${image.src}?w=500 500w,
            ${image.src}?w=800 800w,
            ${image.src}?w=1200 1200w`}
        sizes='(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         33vw'
        src={image.src}
        alt={image.alt ?? 'Icon'}
        loading='lazy'
      />
    </article>
  );
}
