import { Link } from 'react-router-dom';
import style from './mobileMenuLogo.module.css';
import { useGetImages } from '../../hooks/useGetImages';
import { ImageWithCaption } from '../../types/imageWithCaption';

type MobileMenuLogoProps = {
  scrollToTopCloseMenu: () => void;
};

export default function MobileMenuLogo({
  scrollToTopCloseMenu,
}: MobileMenuLogoProps) {
  const location = 'logo';
  const { data } = useGetImages({ location });
  const defaultImage: ImageWithCaption = { src: '', alt: '' };

  const image = data?.[0] ?? defaultImage;
  return (
    <div className={`${style.logoContainer}`}>
      <Link onClick={scrollToTopCloseMenu} to='/' className={style.logoLink}>
        <img className={style.logoImg} src={image.src} alt={image.alt} />
      </Link>
    </div>
  );
}
