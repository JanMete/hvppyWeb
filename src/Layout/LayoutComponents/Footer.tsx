import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { sections } from '../../utils/sections';

export default function Footer() {
  return (
    <footer className='relative bg-black flex flex-col items-center justify-center text-white'>
      {/* ICONS */}
      <div>
        <div className='flex gap-5 text-5xl p-10'>
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
      </div>
      {/* ICONS END */}
      {/* SECTION LINKS */}
      <div>
        <ul className='flex flex-row gap-6 pb-10'>
          <li>
            <Link to='/'>{sections[0].sectionName}</Link>
          </li>
          <li>
            <Link to='/'>{sections[1].sectionName}</Link>
          </li>
          <li>
            <Link to='/'>{sections[2].sectionName}</Link>
          </li>
        </ul>
      </div>
      {/* SECTIONS LINKS END */}
    </footer>
  );
}
