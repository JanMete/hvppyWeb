import { NavLink } from 'react-router-dom';
import { navItems } from '../../constants/navItems';
import style from './mobileMenuLinks.module.css';
import { useTranslation } from 'react-i18next';

type MobileMenuLinksProps = {
  scrollToTopCloseMenu: () => void;
};

export default function MobileMenuLinks({
  scrollToTopCloseMenu,
}: MobileMenuLinksProps) {
  const [t] = useTranslation('global');

  return (
    <ul>
      {navItems.map(({ path, categoryName }, index) => {
        return (
          <li key={index} className={style.link}>
            <NavLink onClick={scrollToTopCloseMenu} to={path}>
              {t(categoryName)}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
