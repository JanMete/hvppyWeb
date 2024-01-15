import { useState } from 'react';

import MobileMenu from './MobileMenu';

export default function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-screen z-50`}>
      <nav className='flex flex-col'>
        <div className='flex justify-end items-center'>
          {/* MENU BUTTON */}

          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`flex flex-col justify-between w-1.5 h-9 mr-4 z-50 mt-9 ${
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
