import { MutableRefObject } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import style from './attributeIcon.module.css';
import { ImageWithCaption } from '../../types/imageWithCaption';
import { useTranslation } from 'react-i18next';

type AttributeIconProps = {
  section: MutableRefObject<null>;
  image: ImageWithCaption;
};

export default function AttributeIcon({ section, image }: AttributeIconProps) {
  const [t] = useTranslation('global');
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
        src={image.src}
        alt={image.alt ?? t('alt.attributes')}
        loading='lazy'
      />
    </article>
  );
}
