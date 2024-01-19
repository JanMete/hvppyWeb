import styles from './footer.module.css';

export default function Footer2() {
  return (
    <div className={styles.footerContainer}>
      <p>
        © Website created by{' '}
        <a target='_blank' href='https://portfolio-janmete.netlify.app/'>
          Jan Metelański
        </a>
      </p>
    </div>
  );
}
