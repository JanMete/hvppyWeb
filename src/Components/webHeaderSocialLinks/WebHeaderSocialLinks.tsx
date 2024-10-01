import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMediaLinks } from '../../constants/socialMedia';
import style from './webHeaderSocialLinks.module.css';

export default function WebHeaderSocialLinks() {
  return (
    <ul className={style.iconsList}>
      {socialMediaLinks.map(({ icon, path, ariaLabel }, index) => {
        return (
          <li key={index} aria-label={ariaLabel} className={style.icon}>
            <a target='_blank' href={path}>
              <FontAwesomeIcon icon={icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
