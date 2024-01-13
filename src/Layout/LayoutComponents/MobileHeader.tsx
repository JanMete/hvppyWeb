import { Link } from 'react-router-dom';
import { useState } from 'react';
import LOGO from '../../assets/homeLogo.jpg';
import MobileMenu from './MobileMenu';

export default function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 w-screen'>
      <nav>
        <div className='w-24 h-auto ml-2 mt-2'>
          <Link to='/'>
            <img
              src={LOGO}
              alt='Logo portrait of artist'
              className='rounded-full'
            />
          </Link>
        </div>
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className='absolute flex top-5 right-5 flex-col justify-between w-1.5 h-9'
        >
          <span
            className={`h-1 w-full bg-white rounded-md transition-all duration-200 ease-in-out ${
              isMobileMenuOpen ? 'rotate-45 origin-left-center' : ''
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-white rounded-md transition-all duration-200 ease-in-out ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-white rounded-md transition-all duration-200 ease-in-out ${
              isMobileMenuOpen ? '-rotate-45 origin-left-center' : ''
            }`}
          ></span>
        </button>
        {isMobileMenuOpen && <MobileMenu />}
      </nav>
    </header>
  );
}
