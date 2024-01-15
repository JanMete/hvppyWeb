import { useEffect, useState } from 'react';
import Aftercare from './Components/Aftercare/Aftercare';
import Hero from './Components/Hero/Hero';
import Layout from './Layout/Layout';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = windowSize[0] < 640;
  return (
    <Layout scrollPosition={scrollPosition} isMobile={isMobile}>
      <Hero />
      <Aftercare isMobile={isMobile} />
    </Layout>
  );
}

export default App;
