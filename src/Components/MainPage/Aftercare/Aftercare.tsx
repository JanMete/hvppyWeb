import styles from './aftercare.module.css';
import { useRef } from 'react';
import aftercare1 from '../../../assets/MainPage/aftercare1.jpeg';
import aftercare2 from '../../../assets/MainPage/aftercare2.jpeg';
import aftercare3 from '../../../assets/MainPage/aftercare3.jpeg';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { useTranslation } from 'react-i18next';

export default function Aftercare() {
  const [t] = useTranslation('global');
  // INTERSECTION OBSERVER

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const section1RefIsVisible = useIntersectionObserver(section1Ref);
  const section2RefIsVisible = useIntersectionObserver(section2Ref);
  const section3RefIsVisible = useIntersectionObserver(section3Ref);

  // INTERSECTION OBSERVER END

  return (
    <div className={styles.aftercareContainer}>
      <h1 className={styles.aftercareHeading}>
        {t('main.aftercare.aftercare')}
      </h1>
      <div>
        {/* SECTION 1 */}

        <section ref={section1Ref} className={styles.section}>
          <div
            className={`${styles.imageContainer} ${
              section1RefIsVisible ? styles.show : styles.hide
            }`}
          >
            <img src={aftercare1} alt='' />
          </div>
          <div
            className={`${styles.txtContainer} ${
              section1RefIsVisible ? styles.show : styles.hide
            }`}
          >
            <h2 className={styles.sectionSecondaryHeading}>
              {t('main.aftercare.header1')}
            </h2>
            <p>{t('main.aftercare.text1')}</p>
          </div>
        </section>

        {/* SECTION 2 */}

        {window.innerWidth < 1200 ? (
          <section ref={section2Ref} className={styles.section}>
            <div
              className={`${styles.imageContainer} ${
                section2RefIsVisible ? styles.showReverse : styles.hideReverse
              }`}
            >
              <img src={aftercare2} alt='' />
            </div>
            <div
              className={`${styles.txtContainer} ${
                section2RefIsVisible ? styles.showReverse : styles.hideReverse
              }`}
            >
              <h2 className={styles.sectionSecondaryHeading}>
                {t('main.aftercare.header2')}
              </h2>
              <p>{t('main.aftercare.text2')}</p>
            </div>
          </section>
        ) : (
          <section ref={section2Ref} className={styles.section}>
            <div
              className={`${styles.txtContainer} ${
                section2RefIsVisible ? styles.showReverse : styles.hideReverse
              }`}
            >
              <h2 className={styles.sectionSecondaryHeading}>
                {t('main.aftercare.header2')}
              </h2>
              <p>{t('main.aftercare.text2')}</p>
            </div>
            <div
              className={`${styles.imageContainer} ${
                section2RefIsVisible ? styles.showReverse : styles.hideReverse
              }`}
            >
              <img src={aftercare2} alt='' />
            </div>
          </section>
        )}

        {/* SECTION 3 */}

        <section ref={section3Ref} className={styles.section}>
          <div
            className={`${styles.imageContainer} ${
              section3RefIsVisible ? styles.show : styles.hide
            }`}
          >
            <img src={aftercare3} alt='' />
          </div>
          <div
            className={`${styles.txtContainer} ${
              section3RefIsVisible ? styles.show : styles.hide
            }`}
          >
            <h2 className={styles.sectionSecondaryHeading}>
              {t('main.aftercare.header3')}
            </h2>
            <p>{t('main.aftercare.text3')}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
