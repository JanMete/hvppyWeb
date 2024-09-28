import { useRef } from 'react';
import style from './hero.module.css';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import HEROIMAGE from '../../assets/MainPage/heroMobile.jpeg';

export default function Hero() {
  const heroTextRef = useRef<HTMLDivElement>(null);

  const isHeroTextRefVisible = useIntersectionObserver(heroTextRef);

  const [t] = useTranslation('global');

  const animationClass = isHeroTextRefVisible
    ? 'animate__animated animate__fadeIn'
    : '';

  return (
    <div className={style.mainContainer}>
      <img className={style.heroImg} src={HEROIMAGE} />
      <div
        ref={heroTextRef}
        className={`${style.heroContainer} ${animationClass}`}
      >
        <h1 className={style.heroHeader}>
          {t('main.hero.hello1')}
          <span className={style.heroTitle}> {t('main.hero.hvppyTattoo')}</span>
          {t('main.hero.website')}
          {'!'}
        </h1>
        <p className={style.heroParagraph}>{t('main.hero.hello2')}</p>
      </div>
    </div>
  );
}
