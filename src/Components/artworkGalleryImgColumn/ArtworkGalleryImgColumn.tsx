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
  return (
    <div className={style.photosColumn}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.img}
          alt={image.alt}
          className={style.artworkPhoto}
        />
      ))}
    </div>
  );
}
