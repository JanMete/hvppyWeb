import Hero from './Hero/Hero';
import Atributes from './Atributes/Atributes';
import Aftercare from './Aftercare/Aftercare';
import { useContext } from 'react';
import { IsMobileContext } from '../../utils/IsMobileContext';

export default function MainPage() {
  const isMobile = useContext(IsMobileContext);
  return (
    <>
      <Hero />
      <Atributes />
      <Aftercare isMobile={isMobile} />
    </>
  );
}
