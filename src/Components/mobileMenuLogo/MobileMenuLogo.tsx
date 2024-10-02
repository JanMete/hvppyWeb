import { Link } from 'react-router-dom';
import style from './mobileMenuLogo.module.css';
import { useGetImages } from '../../hooks/useGetImages';
import { ImageWithCaption } from '../../types/imageWithCaption';
import { useTranslation } from 'react-i18next';

type MobileMenuLogoProps = {
  scrollToTopCloseMenu: () => void;
};

export default function MobileMenuLogo({
  scrollToTopCloseMenu,
}: MobileMenuLogoProps) {
  const [t] = useTranslation('global');
  const location = 'logo';
  const { data } = useGetImages({ location });
  const defaultImage: ImageWithCaption = { src: '', alt: '' };

  const image = data?.[0] ?? defaultImage;
  return (
    <Link onClick={scrollToTopCloseMenu} to='/' className={style.logoLink}>
      <div className={`${style.logoContainer}`}>
        <img
          className={style.logoImg}
          src={image.src}
          alt={image.alt ?? t('alt.logo')}
        />
      </div>
    </Link>
  );
}
