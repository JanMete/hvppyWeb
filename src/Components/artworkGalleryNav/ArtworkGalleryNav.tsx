import { NavLink } from 'react-router-dom';
import artworkCategories from '../../constants/artoworkCategories';
import style from './artworkGalleryNav.module.css';
import { useTranslation } from 'react-i18next';

export default function ArtworkGalleryNav() {
  const [t] = useTranslation('global');

  return (
    <article>
      <ul className={style.categoriesList}>
        {artworkCategories.map(({ categoryName, path }, index) => (
          <li key={index} className={style.categoryLi}>
            <NavLink className={style.categoriesLink} to={path}>
              {t(categoryName)}
            </NavLink>
          </li>
        ))}
      </ul>
    </article>
  );
}
