import styles from './googleMaps.module.css';

export default function GoogleMaps() {
  return (
    <div className={styles.googleMapsContainer}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.2209756295504!2d19.927753369678012!3d50.06973585901462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b008149a3c5%3A0x2f0523177ae265b!2sBlack%20mood%20Tattoo%20Studio!5e0!3m2!1spl!2spl!4v1705498982989!5m2!1spl!2spl'
        width='600'
        height='450'
        style={{ border: 0 }}
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
