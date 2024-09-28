import style from './aftercareSection.module.css';
import { MutableRefObject } from 'react';
import AftercareSectionImg from '../aftercareSectionImg/AftercareSectionImg';
import AftercareSectionDescription from '../aftercareSectionDescription/AftercareSectionDescription';
import { useWindowSizeAndScroll } from '../../hooks/useWindowSizeAndScroll';
import { ImageWithCaption } from '../../types/imageWithCaption';

type AftercareSectionProps = {
  section: MutableRefObject<null>;
  img: ImageWithCaption;
  header: string;
  description: string;
  reversed: boolean;
  isLoading: boolean;
  reversedStyling: boolean;
};

export default function AftercareSection({
  section,
  img,
  header,
  description,
  reversed,
  isLoading,
  reversedStyling,
}: AftercareSectionProps) {
  const { windowSize } = useWindowSizeAndScroll();
  const isMobile = windowSize[0] < 1243;
  isMobile ? (reversed = true) : '';

  return (
    <section ref={section} className={style.section}>
      {reversed ? (
        <>
          <AftercareSectionDescription
            header={header}
            description={description}
            reversedStyling={reversedStyling}
          />
          <AftercareSectionImg
            img={img}
            isLoading={isLoading}
            reversedStyling={reversedStyling}
          />
        </>
      ) : (
        <>
          <AftercareSectionImg
            isLoading={isLoading}
            img={img}
            reversedStyling={reversedStyling}
          />
          <AftercareSectionDescription
            header={header}
            description={description}
            reversedStyling={reversedStyling}
          />
        </>
      )}
    </section>
  );
}
