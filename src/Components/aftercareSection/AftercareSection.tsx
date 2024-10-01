import style from './aftercareSection.module.css';
import { MutableRefObject } from 'react';
import AftercareSectionImg from '../aftercareSectionImg/AftercareSectionImg';
import AftercareSectionDescription from '../aftercareSectionDescription/AftercareSectionDescription';
import { ImageWithCaption } from '../../types/imageWithCaption';

type AftercareSectionProps = {
  section: MutableRefObject<null>;
  img: ImageWithCaption;
  header: string;
  description: string;
  reversed: boolean;
};

export default function AftercareSection({
  section,
  img,
  header,
  description,
  reversed,
}: AftercareSectionProps) {
  return (
    <section
      ref={section}
      className={`${style.section} ${reversed ? style.reversed : ''}`}
    >
      <>
        <AftercareSectionImg img={img} reversed={reversed} />
        <AftercareSectionDescription
          header={header}
          description={description}
          reversed={reversed}
        />
      </>
    </section>
  );
}
