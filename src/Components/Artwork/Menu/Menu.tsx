import styles from './menu.module.css';
import CATEGORY from '../../../assets/category.jpg';

export default function Menu() {
  return (
    <>
      <div className={`${styles.menuContainer} ${styles.pink}`}>
        <div className={styles.categoryContainer}>
          <a href=''>
            <div className={styles.categoryContainerModal}>Test</div>
            <img className={styles.categoryImage} src={CATEGORY} alt='' />
          </a>
        </div>

        <div className={styles.categoryContainer}>
          <a href=''>
            <div className={styles.categoryContainerModal}>Test</div>
            <img src={CATEGORY} alt='' />
          </a>
        </div>

        <div className={styles.categoryContainer}>
          <a href=''>
            <div className={styles.categoryContainerModal}>Test</div>
            <img src={CATEGORY} alt='' />
          </a>
        </div>

        <div className={styles.categoryContainer}>
          <a href=''>
            <div className={styles.categoryContainerModal}>Test</div>
            <img src={CATEGORY} alt='' />
          </a>
        </div>
      </div>
    </>
  );
}
