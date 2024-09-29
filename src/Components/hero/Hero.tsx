import { useRef } from 'react';
import style from './hero.module.css';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import HEROIMAGE from '../../assets/MainPage/heroMobile.jpeg';
import { useWindowSizeAndScroll } from '../../hooks/useWindowSizeAndScroll';

export default function Hero() {
  const heroTextRef = useRef<HTMLDivElement>(null);

  const isHeroTextRefVisible = useIntersectionObserver(heroTextRef);

  const [t] = useTranslation('global');

  const animationClass = isHeroTextRefVisible
    ? 'animate__animated animate__fadeIn'
    : '';

  const { scrollPosition } = useWindowSizeAndScroll();
  const isHeroImageVisible = scrollPosition < 1200;

  return (
    <div className={style.mainContainer}>
      <img
        className={`${
          isHeroImageVisible ? style.heroImg : style.staticHeroImg
        }`}
        src={HEROIMAGE}
      />
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
