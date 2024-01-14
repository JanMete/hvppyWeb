import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../../assets/homeLogo.jpg';
import { sections } from '../../utils/sections';

export default function WebHeader() {
  return (
    <header className='flex items-center text-2xl fixed top-0 w-full font-bold text-white mt-3 z-50'>
      <div className='w-6/12'>
        <nav>
          <ul className='flex justify-around'>
            <li>
              <NavLink to='/'>{sections[0].sectionName.toUpperCase()}</NavLink>
            </li>
            <li>
              <NavLink to='/'>{sections[1].sectionName.toUpperCase()}</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Link to='/'>
          <img
            src={LOGO}
            alt='Logo portrait of artist'
            className='w-32 h-auto rounded-full'
          />
        </Link>
      </div>
      <div className='w-6/12'>
        <nav className='flex justify-around'>
          <ul>
            <li>
              <NavLink to='/'>{sections[2].sectionName.toUpperCase()}</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex flex-col gap-1 mr-6'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/hvppytattoo'
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: '#FFF' }}
            className='hover:scale-125 transition-all'
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
            className='hover:scale-125 transition-all'
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
            className='hover:scale-125 transition-all'
          />
        </a>
      </div>
    </header>
  );
}
