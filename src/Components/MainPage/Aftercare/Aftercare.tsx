import styles from './aftercare.module.css';
import { useEffect, useRef, useState } from 'react';
import aftercare1 from '../../../assets/aftercare1.jpg';

export default function Aftercare() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const [section1RefIsVisible, setSection1RefIsVisible] = useState(false);
  const [section2RefIsVisible, setSection2RefIsVisible] = useState(false);
  const [section3RefIsVisible, setSection3RefIsVisible] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSection1RefIsVisible(entry.isIntersecting);
    });
    observer1.observe(section1Ref.current!);

    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSection2RefIsVisible(entry.isIntersecting);
    });
    observer2.observe(section2Ref.current!);

    const observer3 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSection3RefIsVisible(entry.isIntersecting);
    });
    observer3.observe(section3Ref.current!);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
    };
  }, []);

  return (
    <div className={styles.aftercareContainer}>
      <h1 className={styles.aftercareHeading}>AFTERCARE</h1>
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
              Lorem ipsum dolor sit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam ipsa quam, corrupti modi dolor aliquam unde facilis
              perspiciatis, odio, iusto tenetur quia a! Minus, reiciendis a!
              Fuga tempore quam iste? Iusto ad eaque libero error
              necessitatibus? Impedit modi est, totam excepturi laudantium odit
              facere rem, adipisci, veritatis ipsum vero doloribus deleniti sit
              voluptatem commodi incidunt! Vero consequuntur et excepturi
              numquam.
            </p>
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
              <img src={aftercare1} alt='' />
            </div>
            <div
              className={`${styles.txtContainer} ${
                section2RefIsVisible ? styles.showReverse : styles.hideReverse
              }`}
            >
              <h2>Lorem ipsum dolor sit.</h2>
              <p className={styles.sectionSecondaryHeading}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam ipsa quam, corrupti modi dolor aliquam unde facilis
                perspiciatis, odio, iusto tenetur quia a! Minus, reiciendis a!
                Fuga tempore quam iste? Iusto ad eaque libero error
                necessitatibus? Impedit modi est, totam excepturi laudantium
                odit facere rem, adipisci, veritatis ipsum vero doloribus
                deleniti sit voluptatem commodi incidunt! Vero consequuntur et
                excepturi numquam.
              </p>
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
                Lorem ipsum dolor sit.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam ipsa quam, corrupti modi dolor aliquam unde facilis
                perspiciatis, odio, iusto tenetur quia a! Minus, reiciendis a!
                Fuga tempore quam iste? Iusto ad eaque libero error
                necessitatibus? Impedit modi est, totam excepturi laudantium
                odit facere rem, adipisci, veritatis ipsum vero doloribus
                deleniti sit voluptatem commodi incidunt! Vero consequuntur et
                excepturi numquam.
              </p>
            </div>
            <div
              className={`${styles.imageContainer} ${
                section2RefIsVisible ? styles.showReverse : styles.hideReverse
              }`}
            >
              <img src={aftercare1} alt='' />
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
            <img src={aftercare1} alt='' />
          </div>
          <div
            className={`${styles.txtContainer} ${
              section3RefIsVisible ? styles.show : styles.hide
            }`}
          >
            <h2 className={styles.sectionSecondaryHeading}>
              Lorem ipsum dolor sit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam ipsa quam, corrupti modi dolor aliquam unde facilis
              perspiciatis, odio, iusto tenetur quia a! Minus, reiciendis a!
              Fuga tempore quam iste? Iusto ad eaque libero error
              necessitatibus? Impedit modi est, totam excepturi laudantium odit
              facere rem, adipisci, veritatis ipsum vero doloribus deleniti sit
              voluptatem commodi incidunt! Vero consequuntur et excepturi
              numquam.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
