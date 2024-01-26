import styles from './about.module.css';
import aboutPortrait1 from '../../assets/About/aboutPortrait1.jpg';
import aboutPortrait2 from '../../assets/About/aboutPortrait2.jpeg';
import { useTranslation } from 'react-i18next';

export default function About() {
  const [t] = useTranslation('global');
  return (
    <div className={styles.mainContainer}>
      <section className={styles.sectionContainer}>
        <article className={styles.imageArticleContainer}>
          <div className={styles.imagesContainer}>
            <img src={aboutPortrait1} alt='' />
            <div className={styles.aboutPortrait2}>
              <img src={aboutPortrait2} alt='' />
            </div>
          </div>
        </article>
        <article className={styles.textArticleContainer}>
          <h1>{t('about.youre probably wondering...')}</h1>
          <h3>{t('about.as we all know, happy...')}</h3>
          <p>{t('about.when we turn such a smiling face...')}</p>
        </article>
      </section>
    </div>
  );
}
