import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import LOGO from '../../assets/homeLogo.jpg';
import { sections } from '../../utils/sections';
import { useEffect, useRef, useState } from 'react';

type webHeaderProp = {
  scrollPosition: number;
};

export default function WebHeader({ scrollPosition }: webHeaderProp) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollExceededHeader, setScrollExceededHeader] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      if (scrollPosition > headerRef.current.getBoundingClientRect().height) {
        setScrollExceededHeader(true);
      } else {
        setScrollExceededHeader(false);
      }
    }
  }, [scrollPosition]);

  return (
    <header
      ref={headerRef}
      className={`flex text-2xl fixed top-0 w-full font-bold text-white z-50 transition-all duration-300 ${
        scrollExceededHeader ? 'bg-black/50' : 'bg-transparent'
      }`}
    >
      {/* FIRST PART OF NAVIGATION */}
      <div className='w-6/12 py-5 flex items-center'>
        <nav className='w-full'>
          <ul className='w-full flex justify-around'>
            <li>
              <NavLink to='/'>{sections[0].sectionName.toUpperCase()}</NavLink>
            </li>
            <li>
              <NavLink to='/'>{sections[1].sectionName.toUpperCase()}</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* LOGO */}
      <div>
        <Link to='/'>
          <img
            src={LOGO}
            alt='Logo portrait of artist'
            className={`w-20 h-auto rounded-full transition-all duration-300 ${
              scrollExceededHeader ? '' : 'scale-150 mt-7'
            }`}
          />
        </Link>
      </div>

      {/* SECOND PART OF NAVIGATION */}
      <div className='w-6/12 py-5 flex'>
        <nav className='flex justify-between w-full'>
          <ul className='flex justify-around w-full items-center'>
            <li>
              <NavLink to='/'>{sections[2].sectionName.toUpperCase()}</NavLink>
            </li>
          </ul>
          {/* SOCIAL LINKS */}
          <ul className='mr-5 flex gap-3 items-center'>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
