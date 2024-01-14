import { Link } from 'react-router-dom';
import { sections } from '../../utils/sections';

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
};

export default function MobileMenu({ isMobileMenuOpen }: MobileMenuProps) {
  return (
    <div
      className={`overflow-hidden transition-all duration-200 ease-in-out ${
        isMobileMenuOpen ? 'opacity-1' : 'opacity-0'
      }`}
    >
      <ul>
        <li className='text-white p-4 text-5xl'>
          <Link to='/'>{sections[0].sectionName.toUpperCase()}</Link>
        </li>
        <li className='text-white p-4 text-5xl'>
          <Link to='/'>{sections[1].sectionName.toUpperCase()}</Link>
        </li>
        <li className='text-white p-4 text-5xl'>
          <Link to='/'>{sections[2].sectionName.toUpperCase()}</Link>
        </li>
      </ul>
    </div>
  );
}
