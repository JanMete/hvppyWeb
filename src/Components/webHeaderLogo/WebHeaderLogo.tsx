import style from './webHeaderLogo.module.css';
import { Link } from 'react-router-dom';
import { useGetImages } from '../../hooks/useGetImages';
import { ImageWithCaption } from '../../types/imageWithCaption';
import { useTranslation } from 'react-i18next';

type WebHeaderLogoProps = {
  scrollExceededHeader: boolean;
  scrollToTop: () => void;
};

export default function WebHeaderLogo({
  scrollExceededHeader,
  scrollToTop,
}: WebHeaderLogoProps) {
  const [t] = useTranslation('global');
  const location = 'logo';
  const { data } = useGetImages({ location });
  const defaultImage: ImageWithCaption = { src: '', alt: '' };

  const image = data?.[0] ?? defaultImage;

  return (
    <div
      className={`${
        scrollExceededHeader
          ? ` ${style.smallerLogoContainer}`
          : style.logoContainer
      } ${style.LogoContainerDefault}`}
    >
      <Link className={style.logoLink} onClick={scrollToTop} to='/'>
        <img
          src={image.src}
          alt={image.alt ?? t('alt.logo')}
          className={style.logoImg}
        />
      </Link>
    </div>
  );
}
