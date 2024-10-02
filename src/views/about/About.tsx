import style from './about.module.css';
import BACKGROUND from '../../assets/About/aboutBackground.svg';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import AboutImages from '../../Components/aboutImages/AboutImages';

export default function About() {
  const textArticleContainerRef = useRef(null);

  const isTextArticleContainerRef = useIntersectionObserver(
    textArticleContainerRef
  );

  const [t] = useTranslation('global');

  const animationStyles = isTextArticleContainerRef
    ? 'animate__animated animate__fadeInRight'
    : '';

  return (
    <section className={style.mainContainer}>
      <img
        src={BACKGROUND}
        className={style.aboutBackgroundImg}
        alt='background'
      />
      <AboutImages />
      <article
        ref={textArticleContainerRef}
        className={`${style.textArticleContainer} ${animationStyles}`}
      >
        <div className={style.text}>
          <h1>{t('about.youre probably wondering...')}</h1>
          <h3>{t('about.as we all know, happy...')}</h3>
          <p>{t('about.when we turn such a smiling face...')}</p>
        </div>
      </article>
    </section>
  );
}
