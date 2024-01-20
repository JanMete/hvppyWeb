import styles from './menu.module.css';
import { categories } from '../../../utils/categories';

export default function Menu() {
  return (
    <>
      <div className={`${styles.menuContainer} ${styles.pink}`}>
        {categories.map((category, index) => {
          return (
            <div key={index} className={styles.categoryContainer}>
              <a href={category.patch}>
                <div className={styles.categoryContainerModal}>
                  {category.categoryName}
                </div>
                <img
                  className={styles.categoryImage}
                  src={category.img}
                  alt={category.img}
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
