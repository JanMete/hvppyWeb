import { useEffect, useState } from 'react';
import WebHeader from './LayoutComponents/WebHeader';
import MobileHeader from './LayoutComponents/MobileHeader';

type LayoutProp = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProp) {
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
    <>
      {isMobile ? <MobileHeader /> : <WebHeader />}
      {children}
    </>
  );
}
