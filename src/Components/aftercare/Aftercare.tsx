import styles from './aftercare.module.css';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import AftercareSection from '../aftercareSection/AftercareSection';
import { useGetImages } from '../../hooks/useGetImages';
import LoaderErrorContainer from '../loaderErrorContainer/loaderErrorContainer';
import { useLocation } from 'react-router-dom';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { ImageWithCaption } from '../../types/imageWithCaption';

const Aftercare = () => {
  const location = useLocation().pathname;

  const [t] = useTranslation('global');

  const aftercareHeader = useRef(null);
  const aftercareSection1 = useRef(null);
  const aftercareSection2 = useRef(null);
  const aftercareSection3 = useRef(null);

  const isAftercareHeaderVisible = useIntersectionObserver(aftercareHeader);
  const { data, error, isLoading } = useGetImages({ location });

  if (error) {
    return (
      <LoaderErrorContainer isGallery={false}>
        <div>Error!</div>
      </LoaderErrorContainer>
    );
  }
  const defaultImage: ImageWithCaption = { src: '', alt: '' };

  const firstImage = data?.[0] ?? defaultImage;
  const secondImage = data?.[1] ?? defaultImage;
  const thirdImage = data?.[2] ?? defaultImage;
  return (
    <article className={styles.aftercareContainer}>
      <h1
        ref={aftercareHeader}
        className={`${styles.aftercareHeading} ${
          isAftercareHeaderVisible ? 'animate__animated animate__fadeIn' : ''
        }`}
      >
        {t('main.aftercare.aftercare')}
      </h1>
      <div>
        <AftercareSection
          section={aftercareSection1}
          img={firstImage}
          header={'main.aftercare.header1'}
          description={'main.aftercare.text1'}
          reversed={false}
          reversedStyling={false}
          isLoading={isLoading}
        />
        <AftercareSection
          section={aftercareSection2}
          img={secondImage}
          header={'main.aftercare.header2'}
          description={'main.aftercare.text2'}
          reversed={true}
          reversedStyling={true}
          isLoading={isLoading}
        />
        <AftercareSection
          section={aftercareSection3}
          img={thirdImage}
          header={'main.aftercare.header3'}
          description={'main.aftercare.text3'}
          reversed={false}
          reversedStyling={false}
          isLoading={isLoading}
        />
      </div>
    </article>
  );
};

export default Aftercare;
