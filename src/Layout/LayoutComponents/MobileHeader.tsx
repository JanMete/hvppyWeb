import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import LOGO from '../../assets/homeLogo.jpg';
import MobileMenu from './MobileMenu';

type MobileHeaderProp = {
  scrollPosition: number;
};

export default function MobileHeader({ scrollPosition }: MobileHeaderProp) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollExceededHeader, setScrollExceededHeader] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const mobileHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileHeaderRef.current) {
      setHeaderHeight(mobileHeaderRef.current.getBoundingClientRect().height);
      if (
        scrollPosition > mobileHeaderRef.current.getBoundingClientRect().height
      ) {
        setScrollExceededHeader(true);
      } else {
        setScrollExceededHeader(false);
      }
    }
  }, [scrollPosition]);

  return (
    <header className={`fixed top-0 w-screen z-50`}>
      <nav ref={mobileHeaderRef} className='flex flex-col'>
        <div className='flex justify-between items-center'>
          {/* LOGO */}

          <div
            className={`h-auto ml-4 mt-3 z-50 transition-all duration-300 ${
              isMobileMenuOpen ? 'text-white' : ''
            } ${scrollExceededHeader ? 'w-16' : 'w-24'}`}
          >
            <Link to='/'>
              <img
                src={LOGO}
                alt='Logo portrait of artist'
                className='rounded-full'
              />
            </Link>
          </div>

          {/* LOGO END */}

          {/* MENU BUTTON */}

          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`flex flex-col justify-between w-1.5 h-9 mr-5 z-50 ${
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

          {/* MENU BUTTON END */}
        </div>
        <MobileMenu
          headerHeight={headerHeight}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </nav>
    </header>
  );
}
