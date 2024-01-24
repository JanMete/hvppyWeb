import styles from './about.module.css';
import aboutPortrait1 from '../../assets/About/aboutPortrait1.jpg';
import aboutPortrait2 from '../../assets/About/aboutPortrait2.jpeg';

export default function About() {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.sectionContainer}>
        <article className={styles.imageArticleContainer}>
          <div className={styles.imagesContainer}>
            <img src={aboutPortrait1} alt='' />
            <div className={styles.aboutPortrait2}>
              <img src={aboutPortrait2} alt='' />
            </div>
          </div>
        </article>
        <article className={styles.tekstArticleContainer}>
          <h1>
            Pewnie zastanawiasz się czemu „Hvppy” i skąd się wzięło to „v”.
          </h1>
          <h3>
            Jak wszyscy doskonale wiemy happy oznacza szczęście i właśnie to
            staram się przekazać we wszystkim co robię. Mianowicie „v”
            symbolizuje odwrócone „A”, które natomiast nawiązuje do dobrze nam
            wszystkim znanej uśmiechniętej emotikonki. 😊
          </h3>
          <p>
            Gdy odwrócimy taką uśmiechniętą minkę jest ona wtedy smutna. Nawet
            najweselszy człowiek na świecie jest czasem smutny. „Hvppy” ma być
            przypomnieniem dla wszystkich jak i dla mnie, że każdemu zdarza się
            gorszy moment w życiu. Często jest tak że te gorsze chwile do nas
            wracają lub po prostu trwają dłużej, ale musimy pamiętać że to
            szczęście gdzieś tam jest i jeżeli o nie zawalczymy to zawsze do nas
            wróci. Najważniejsze to nie dać się swoim demonom i skupiać się na
            tych małych pozytywnych rzeczy w otaczającym nas świecie. „Don’t
            worry be hvppy”
          </p>
        </article>
      </section>
    </div>
  );
}
