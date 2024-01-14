import { useEffect, useState } from 'react';
import Aftercare from './Components/Aftercare/Aftercare';
import Hero from './Components/Hero';
import Layout from './Layout/Layout';

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const isMobile = windowSize[0] < 640;
  return (
    <Layout isMobile={isMobile}>
      <main>
        <Hero />
        <Aftercare isMobile={isMobile} />
      </main>
    </Layout>
  );
}

export default App;
