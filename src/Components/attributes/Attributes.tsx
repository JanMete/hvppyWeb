import { useRef } from 'react';
import styles from './attributes.module.css';
import { useTranslation } from 'react-i18next';
import { AttributeText } from '../attributeText/AttributeText';
import AttributeIcon from '../attributeIcon/AttributeIcon';
import { useGetImages } from '../../hooks/useGetImages';
import { ImageWithCaption } from '../../types/imageWithCaption';

export default function Attributes() {
  const location = 'attributes';
  const { data } = useGetImages({ location });

  const [t] = useTranslation('global');

  const textSection1 = useRef(null);
  const iconSection1 = useRef(null);
  const textSection2 = useRef(null);
  const iconSection2 = useRef(null);
  const textSection3 = useRef(null);

  const defaultImage: ImageWithCaption = { src: '', alt: '' };
  const image1 = data?.[0] ?? defaultImage;
  const image2 = data?.[1] ?? defaultImage;

  return (
    <section className={styles.attributesContainer}>
      <AttributeText section={textSection1}>
        <p>{t('main.attributes.happy')}</p>
        <p>{t('main.attributes.vibes')}</p>
      </AttributeText>
      <AttributeIcon image={image1} section={iconSection1} />
      <AttributeText section={textSection2}>
        <p>{t('main.attributes.unique')}</p>
        <p>{t('main.attributes.designs')}</p>
      </AttributeText>
      <AttributeIcon image={image2} section={iconSection2} />
      <AttributeText section={textSection3}>
        <p>{t('main.attributes.great')}</p>
        <p>{t('main.attributes.quality')}</p>
      </AttributeText>
    </section>
  );
}
