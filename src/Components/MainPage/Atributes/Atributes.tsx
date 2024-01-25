import { useRef } from 'react';
import styles from './atributes.module.css';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import ATRIBUTEICON1 from '../../../assets/MainPage/atributeIcon1.png';
import ATRIBUTEICON2 from '../../../assets/MainPage/atributeIcon2.png';

export default function Atributes() {
  const [t] = useTranslation('global');

  // INTERSECTION OBSERVER
  const sections = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const sectionIsVisible = sections.map(useIntersectionObserver);
  // INTERSECTION OBSERVER END

  const attributes = [
    { texts: [t('main.attributes.happy'), t('main.attributes.vibes')] },
    { image: ATRIBUTEICON1 },
    { texts: [t('main.attributes.unique'), t('main.attributes.designes')] },
    { image: ATRIBUTEICON2 },
    { texts: [t('main.attributes.great'), t('main.attributes.quality')] },
  ];

  return (
    <article className={styles.atributesContainer}>
      <div className={`${styles.atributesContentContainer}`}>
        {attributes.map((attribute, index) => (
          <section
            key={index}
            ref={sections[index]}
            className={`${styles.spanSection} ${
              sectionIsVisible[index] ? styles.show : styles.hide
            }`}
          >
            {attribute.texts &&
              attribute.texts.map((text, i) => <span key={i}>{text}</span>)}
            {attribute.image && (
              <img className={styles.image} src={attribute.image} alt='' />
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
