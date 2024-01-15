import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { sections } from '../../../utils/sections';
import { useEffect, useRef, useState } from 'react';
import './footer.css';

export default function Footer() {
  const iconsRef = useRef<HTMLLinkElement>(null);
  const sectionsRef = useRef<HTMLLinkElement>(null);

  const [iconsRefIsVisible, setIconsRefIsVisible] = useState(false);
  const [sectionsRefIsVisible, setSectionsRefIsVisible] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIconsRefIsVisible(entry.isIntersecting);
    });
    observer1.observe(iconsRef.current!);

    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSectionsRefIsVisible(entry.isIntersecting);
    });
    observer2.observe(sectionsRef.current!);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <footer className=' w-screen overflow-hidden relative bg-black flex flex-col items-center justify-center text-white'>
      <div>
        {/* ICONS */}
        <div
          ref={iconsRef}
          className={`flex gap-5 text-5xl p-10 ${
            iconsRefIsVisible ? 'showIconTop' : 'hideIconTop'
          }`}
        >
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/hvppytattoo'
          >
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: '#FFF' }}
              className={`hover:scale-125 transition-all`}
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
      <div
        ref={sectionsRef}
        className={` ${
          sectionsRefIsVisible ? 'showIconBottom' : 'hideIconBottom'
        }`}
      >
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
