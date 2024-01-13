import { Link } from 'react-router-dom';
import { sections } from '../../utils/sections';

export default function MobileMenu() {
  return (
    <ul>
      <li>
        <Link to='/'>{sections[0].sectionName.toUpperCase()}</Link>
      </li>
      <li>
        <Link to='/'>{sections[1].sectionName.toUpperCase()}</Link>
      </li>
      <li>
        <Link to='/'>{sections[2].sectionName.toUpperCase()}</Link>
      </li>
    </ul>
  );
}
