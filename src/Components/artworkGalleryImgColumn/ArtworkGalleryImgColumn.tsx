import { useTranslation } from 'react-i18next';
import style from './artworkGalleryImgColumn.module.css';

type Image = {
  img: string;
  alt: string;
};

type ArtworkGalleryImgColumnProps = {
  images: Image[];
};

export default function ArtworkGalleryImgColumn({
  images,
}: ArtworkGalleryImgColumnProps) {
  const [t] = useTranslation('global');
  return (
    <div className={style.photosColumn}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.img}
          alt={image.alt ?? t('alt.image')}
          className={style.artworkPhoto}
          loading='lazy'
        />
      ))}
    </div>
  );
}
