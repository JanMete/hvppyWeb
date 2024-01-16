import styles from './atributes.module.css';
import ATRIBUTEICON1 from '../../assets/atributeIcon1.png';
import ATRIBUTEICON2 from '../../assets/atributeIcon2.png';

export default function Atributes() {
  return (
    <article className={styles.atributesContainer}>
      <section className={styles.spanSection}>
        <span>HAPPY</span>
        <span>VIBES</span>
      </section>
      <section>
        <img className={styles.image} src={ATRIBUTEICON1} alt='' />
      </section>
      <section className={styles.spanSection}>
        <span>UNIQUE</span>
        <span>DESIGNS</span>
      </section>
      <section>
        <img className={styles.image} src={ATRIBUTEICON2} alt='' />
      </section>
      <section className={styles.spanSection}>
        <span>GREAT</span>
        <span>Quality</span>
      </section>
    </article>
  );
}
