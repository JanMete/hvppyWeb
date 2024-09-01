import { useRef } from 'react';
import styles from './atributes.module.css';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import ATRIBUTEICON1 from '../../../assets/MainPage/atributeIcon1.png';
import ATRIBUTEICON2 from '../../../assets/MainPage/atributeIcon2.png';

export default function Atributes() {
  const [t] = useTranslation('global');

  // INTERSECTION OBSERVER
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  const sectionIsVisible1 = useIntersectionObserver(section1);
  const sectionIsVisible2 = useIntersectionObserver(section2);
  const sectionIsVisible3 = useIntersectionObserver(section3);
  const sectionIsVisible4 = useIntersectionObserver(section4);
  const sectionIsVisible5 = useIntersectionObserver(section5);
  // INTERSECTION OBSERVER END

  return (
    <section className={styles.atributesContainer}>
      <div className={`${styles.atributesContentContainer}`}>
        <article
          ref={section1}
          className={`${styles.spanSection} ${
            sectionIsVisible1 ? styles.show : styles.hide
          }`}
        >
          <span>{t('main.attributes.happy')}</span>
          <span>{t('main.attributes.vibes')}</span>
        </article>

        <article
          ref={section2}
          className={`${styles.spanSection} ${
            sectionIsVisible2 ? styles.show : styles.hide
          }`}
        >
          <img
            className={`${styles.image} ${styles.secondImage}`}
            src={ATRIBUTEICON1}
            alt=''
          />
        </article>

        <article
          ref={section3}
          className={`${styles.spanSection} ${
            sectionIsVisible3 ? styles.show : styles.hide
          }`}
        >
          <span>{t('main.attributes.unique')}</span>
          <span>{t('main.attributes.designes')}</span>
        </article>

        <article
          ref={section4}
          className={`${styles.spanSection} ${
            sectionIsVisible4 ? styles.show : styles.hide
          }`}
        >
          <img className={styles.image} src={ATRIBUTEICON2} alt='' />
        </article>

        <article
          ref={section5}
          className={`${styles.spanSection} ${
            sectionIsVisible5 ? styles.show : styles.hide
          }`}
        >
          <span>{t('main.attributes.great')}</span>
          <span>{t('main.attributes.quality')}</span>
        </article>
      </div>
    </section>
  );
}
