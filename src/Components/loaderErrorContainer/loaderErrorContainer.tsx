import galleryStyle from './galleryLoaderErrorContainer.module.css';
import defaultStyle from './defaultLoaderErrorContainer.module.css';
import BACKGROUNDIMAGE from '../../assets/Artwork Images/galleryBackground.svg';
import { FunctionComponent, PropsWithChildren } from 'react';

type LoaderErrorContainerProps = {
  isGallery: boolean;
};

const LoaderErrorContainer: FunctionComponent<
  PropsWithChildren<LoaderErrorContainerProps>
> = ({ children, isGallery }) => {
  const style = isGallery ? galleryStyle : defaultStyle;
  return (
    <section className={style.galleryContainer}>
      {isGallery && (
        <img
          src={BACKGROUNDIMAGE}
          className={style.backgroundImg}
          alt='Background'
        />
      )}
      {children}
    </section>
  );
};

export default LoaderErrorContainer;
