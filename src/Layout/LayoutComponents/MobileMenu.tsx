import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { sections } from '../../utils/sections';

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
};

export default function MobileMenu({ isMobileMenuOpen }: MobileMenuProps) {
  return (
    <div
      className={`bg-black/60 h-screen absolute pt-32 overflow-hidden transition-all duration-300 ease-in-out pb-5 ${
        isMobileMenuOpen ? 'w-full' : 'w-0'
      }`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* LINKS */}

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

      {/* ICONS */}

      <div className='flex gap-5 mt-4 ml-4 text-5xl'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/hvppytattoo'
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: '#FFF' }}
            className='transition-all'
          />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/hvppy_tattoo/'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: '#FFF' }}
            className='transition-all'
          />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.tiktok.com/@hvppy_art?lang=pl-PL'
        >
          <FontAwesomeIcon
            icon={faTiktok}
            style={{ color: '#FFF' }}
            className='transition-all'
          />
        </a>
      </div>

      {/* ICONS END */}
    </div>
  );
}
