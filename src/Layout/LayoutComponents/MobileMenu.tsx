import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { sections } from '../../utils/sections';
import LOGO from '../../assets/homeLogo.jpg';

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
};

export default function MobileMenu({ isMobileMenuOpen }: MobileMenuProps) {
  return (
    <div
      className={`bg-black/60 flex flex-col absolute overflow-hidden transition-all duration-300 ease-in-out pb-5`}
      style={{
        height: '100dvh',
        opacity: isMobileMenuOpen ? 1 : 0,
        width: isMobileMenuOpen ? '100dvw' : '0',
      }}
    >
      {/* LOGO */}

      <div
        className={`h-auto ml-3 mt-3 ${isMobileMenuOpen ? 'text-white' : ''}`}
      >
        <Link to='/'>
          <img
            src={LOGO}
            alt='Logo portrait of artist'
            className='rounded-full w-20'
          />
        </Link>
      </div>

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
      <div className='flex mt-auto gap-5  ml-4 text-5xl'>
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
