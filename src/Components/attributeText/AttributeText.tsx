import { FunctionComponent, PropsWithChildren, MutableRefObject } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import style from './attributeText.module.css';

type AttributeTextProps = {
  section: MutableRefObject<null>;
};

export const AttributeText: FunctionComponent<
  PropsWithChildren<AttributeTextProps>
> = ({ section, children }) => {
  const isSectionVisible = useIntersectionObserver(section);
  const animationClass = isSectionVisible
    ? 'animate__animated animate__fadeIn'
    : '';

  return (
    <article ref={section} className={`${style.spanSection} ${animationClass}`}>
      {children}
    </article>
  );
};
