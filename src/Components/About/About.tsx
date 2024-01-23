import styles from './about.module.css';
import aboutPortrait1 from '../../assets/About/aboutPortrait1.jpeg';
import aboutPortrait2 from '../../assets/About/aboutPortrait2.jpeg';

export default function About() {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.topSectionContainer}>
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
            Yoo witam cię na stronie hvppy tattoo! Tu znajdziesz wszystko co
            powinieneś wiedzień o mnie jak i o mojej sztuce!
          </h1>
          <h2>
            Jeśli już tu trafiłeś pewnie zastanawiasz się czemu „Hvppy” a nie
            zwykłe „happy”. Jak wszyscy wiemy happy oznacza radość, szczęście, i
            dokładnie z tym jest to wszystko co robie związane. Mianowicie „v”
            które ma symbolizować odwróconą litere „A”, a ona ma być metaforą
            dla znanej nam wszystkim uśmiechniętej emotikonki „🙂”.{' '}
          </h2>
          <p>
            Ale dla czego jest odwrócone do góry nogami? Dla czego jedna litera?
            Gdy odwrócimy radosną minkę jest ona smutna. Nawet najweselszy
            człowiek czasem jest smutny. „Hvppy” ma być przypomnieniem dla ludzi
            jak i dla samej siebie, że każdemu zdarza się gorszy moment w życiu.
            Ta chwila może nawet wracać lub dłużej trwać, ale pamiętajmy, że to
            szczęście gdzieś tam jest i jeśli zawalczymy o nie to zawsze do nas
            wróci. Ważne abyśmy nie poddali się własnym demonom i patrzyli na
            wszystko co nas otacza za coś dobrego nawet jeśli wydaję się nam, że
            jest inaczej. „Don’t worry be happy”
          </p>
        </article>
      </section>
      <section className={styles.bottomSectionContainer}>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          obcaecati, quia nam maiores qui culpa sit cum illo dolore, quibusdam
          incidunt totam odio provident, consectetur sed quasi atque dignissimos
          vitae.
        </p>
      </section>
    </div>
  );
}
