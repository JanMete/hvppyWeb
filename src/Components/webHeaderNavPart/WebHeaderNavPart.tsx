import { useTranslation } from 'react-i18next';
import { NavPartTypes } from '../../types/webHeaderTypes';
import { NavLink } from 'react-router-dom';
import style from './webHeaderNavPart.module.css';

type WebHeaderNavPartProps = {
  navPart: NavPartTypes;
  scrollToTop: () => void;
};

export default function WebHeaderNavPart({
  navPart,
  scrollToTop,
}: WebHeaderNavPartProps) {
  const [t] = useTranslation('global');

  return (
    <>
      {navPart.map(({ categoryName, path }, index) => {
        return (
          <div key={index} className={style.linkContainer}>
            <NavLink onClick={scrollToTop} to={path}>
              {t(categoryName)}
            </NavLink>
          </div>
        );
      })}
    </>
  );
}
