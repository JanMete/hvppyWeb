import { Link } from 'react-router-dom';
import { useState } from 'react';
import LOGO from '../../assets/homeLogo.jpg';
import MobileMenu from './MobileMenu';

export default function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-screen`}>
      <nav className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <div
            className={`w-24 h-auto ml-4 mt-3 ${
              isMobileMenuOpen ? 'text-white' : ''
            }`}
          >
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
            className={`flex flex-col justify-between w-1.5 h-9 mr-5 ${
              isMobileMenuOpen ? 'text-white' : ''
            }`}
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
        </div>
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
      </nav>
    </header>
  );
}
