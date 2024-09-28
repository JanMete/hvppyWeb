import style from './location.module.css';
import LocationGoogleMap from '../locationGoogleMap/LocationGoogleMap';
import LocationContactLocation from '../locationContactLocation/LocationContactLocation';
import LocationForm from '../locationForm/LocationForm';

export default function Location() {
  return (
    <section className={style.locationContainer}>
      <LocationGoogleMap />
      <article className={style.contactNewsletterContainer}>
        <LocationContactLocation />
        <LocationForm />
      </article>
    </section>
  );
}
