import style from './artworkGalleryScrollBtn.module.css';
import { useEffect, useState } from 'react';
import { useWindowSizeAndScroll } from '../../hooks/useWindowSizeAndScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ArtworkGalleryScrollBtn() {
  const { scrollPosition } = useWindowSizeAndScroll();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    if (scrollPosition > 600) {
      setShowScrollButton(() => true);
    } else {
      setShowScrollButton(() => false);
    }
  }, [scrollPosition]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <article
      className={`${style.scrollButtonContainer} ${
        showScrollButton ? style.showElement : ''
      }`}
    >
      <button onClick={handleScrollToTop} className={`${style.scrollButton} `}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </article>
  );
}
