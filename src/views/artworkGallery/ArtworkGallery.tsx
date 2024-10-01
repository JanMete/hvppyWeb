import { useParams } from 'react-router-dom';
import style from './artworkGallery.module.css';
import { useGetGalleryImages } from '../../hooks/useGetGalleryImages';
import ArtworkGalleryNav from '../../Components/artworkGalleryNav/ArtworkGalleryNav';
import ArtworkGalleryImgColumn from '../../Components/artworkGalleryImgColumn/ArtworkGalleryImgColumn';
import BACKGROUNDIMAGE from '../../assets/Artwork Images/galleryBackground.svg';
import ArtworkGalleryScrollBtn from '../../Components/artworkGalleryScrollBtn/ArtworkGalleryScrollBtn';
import LoaderErrorContainer from '../../Components/loaderErrorContainer/loaderErrorContainer';
import Loader from '../../Components/loader/Loader';

export default function ArtworkGallery() {
  const { category } = useParams();
  const { firstArray, secondArray, isLoading, error } = useGetGalleryImages({
    category,
  });

  const imagesToDisplay1 = firstArray.map((imgObj) => ({
    img: imgObj.src,
    alt: imgObj.alt,
  }));

  const imagesToDisplay2 = secondArray.map((imgObj) => ({
    img: imgObj.src,
    alt: imgObj.alt,
  }));

  if (isLoading) {
    return (
      <LoaderErrorContainer withBackground={true}>
        <Loader />
      </LoaderErrorContainer>
    );
  }

  if (error) {
    return (
      <LoaderErrorContainer withBackground={true}>
        <p>Error loading images</p>
      </LoaderErrorContainer>
    );
  }

  return (
    <section className={style.galleryContainer}>
      <img
        src={BACKGROUNDIMAGE}
        className={style.backgroundImg}
        alt='Background'
      />
      <ArtworkGalleryNav />
      <article className={style.photosContainer}>
        <ArtworkGalleryImgColumn images={imagesToDisplay1} />
        <ArtworkGalleryImgColumn images={imagesToDisplay2} />
      </article>
      <ArtworkGalleryScrollBtn />
    </section>
  );
}
