import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { sections } from '../../../utils/sections';
import { useEffect, useRef, useState } from 'react';
import styles from './footer.module.css';

export default function Footer() {
  const iconsRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

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
    <footer className={styles.footerContainer}>
      {/* ICONS */}

      <div
        ref={iconsRef}
        className={`${styles.iconsContainer} ${
          iconsRefIsVisible ? styles.showIconTop : styles.hideIconTop
        }`}
      >
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/hvppytattoo'
        >
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/hvppy_tattoo/'
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.tiktok.com/@hvppy_art?lang=pl-PL'
        >
          <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
        </a>
      </div>
      {/* ICONS END */}

      {/* SECTION LINKS */}
      <div
        ref={sectionsRef}
        className={`${styles.sectionLinksContaner} ${
          sectionsRefIsVisible ? styles.showIconBottom : styles.hideIconBottom
        }`}
      >
        <ul className='flex flex-row gap-5'>
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
    </footer>
  );
}
