import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMediaLinks } from '../../constants/socialMedia';
import style from './mobileMenuIcons.module.css';

export default function MobileMenuIcons() {
  return (
    <ul className={style.iconsList}>
      {socialMediaLinks.map(({ icon, path, ariaLabel }, index) => {
        return (
          <li key={index}>
            <a target='_blank' href={path} aria-label={ariaLabel}>
              <FontAwesomeIcon icon={icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
