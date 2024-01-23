import { useRef, useState, useEffect } from 'react';
import styles from './atributes.module.css';
import ATRIBUTEICON1 from '../../../assets/MainPage/atributeIcon1.png';
import ATRIBUTEICON2 from '../../../assets/MainPage/atributeIcon2.png';
import { useTranslation } from 'react-i18next';

export default function Atributes() {
  const [t] = useTranslation('global');
  const [isSection1Visible, setIsSection1Visible] = useState(false);
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const [isSection4Visible, setIsSection4Visible] = useState(false);
  const [isSection5Visible, setIsSection5Visible] = useState(false);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsSection1Visible(entry.isIntersecting);
    });
    observer1.observe(section1.current!);

    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsSection2Visible(entry.isIntersecting);
    });
    observer2.observe(section2.current!);

    const observer3 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsSection3Visible(entry.isIntersecting);
    });
    observer3.observe(section3.current!);

    const observer4 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsSection4Visible(entry.isIntersecting);
    });
    observer4.observe(section4.current!);

    const observer5 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsSection5Visible(entry.isIntersecting);
    });
    observer5.observe(section5.current!);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
      observer5.disconnect();
    };
  }, []);

  return (
    <article className={styles.atributesContainer}>
      <div className={`${styles.atributesContentContainer}`}>
        <section
          ref={section1}
          className={`${styles.spanSection} ${
            isSection1Visible ? styles.show : styles.hide
          }`}
        >
          <span>{t('main.attributes.happy')}</span>
          <span>{t('main.attributes.vibes')}</span>
        </section>

        <section
          ref={section2}
          className={`${styles.spanSection} ${
            isSection2Visible ? styles.show : styles.hide
          }`}
        >
          <img className={styles.image} src={ATRIBUTEICON1} alt='' />
        </section>

        <section
          ref={section3}
          className={`${styles.spanSection} ${
            isSection3Visible ? styles.show : styles.hide
          }`}
        >
          <span>{t('main.attributes.unique')}</span>
          <span>{t('main.attributes.designes')}</span>
        </section>

        <section
          ref={section4}
          className={`${styles.spanSection} ${
            isSection4Visible ? styles.show : styles.hide
          }`}
        >
          <img className={styles.image} src={ATRIBUTEICON2} alt='' />
        </section>

        <section
          ref={section5}
          className={`${styles.spanSection} ${
            isSection5Visible ? styles.show : styles.hide
          }`}
        >
          <span>{t('main.attributes.great')}</span>
          <span>{t('main.attributes.quality')}</span>
        </section>
      </div>
    </article>
  );
}
