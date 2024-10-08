import { useTranslation } from 'react-i18next';
import style from './aftercareSectionDescription.module.css';
import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

type AftercareSectionDescriptionProps = {
  header: string;
  description: string;
  reversed: boolean;
};

export default function AftercareSectionDescription({
  header,
  description,
  reversed,
}: AftercareSectionDescriptionProps) {
  const descriptionRef = useRef(null);
  const isDescriptionVisible = useIntersectionObserver(descriptionRef);
  const [t] = useTranslation('global');

  const animationClass = isDescriptionVisible
    ? reversed
      ? 'animate__animated animate__fadeInRight'
      : 'animate__animated animate__fadeInLeft'
    : '';

  return (
    <div
      ref={descriptionRef}
      className={`${style.descriptionContainer} ${animationClass}`}
    >
      <h2>{t(header)}</h2>
      <p>{t(description)}</p>
    </div>
  );
}
