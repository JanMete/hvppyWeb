import style from './newContactForm.module.css';
import BACKGROUND from '../../assets/Contact/contactFormBackground.svg';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '../../types/formTypes';
import ContactFormTopSection from '../contactFormTopSection/ContactFormTopSection';
import ContactFormBottomSection from '../contactFormBottomSection/ContactFormBottomSection';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useGetImages } from '../../hooks/useGetImages';
import { useLocation } from 'react-router-dom';
import { ImageWithCaption } from '../../types/imageWithCaption';
import Loader from '../loader/Loader';
import LoaderErrorContainer from '../loaderErrorContainer/loaderErrorContainer';

export default function ContactForm() {
  const location = useLocation().pathname;
  const { data, isLoading } = useGetImages({ location });

  const formRef = useRef(null);
  const isFormVisible = useIntersectionObserver(formRef);
  const contactImageRef = useRef(null);
  const isContactImageVisible = useIntersectionObserver(contactImageRef);

  const { t } = useTranslation('global');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    emailjs
      .send(
        import.meta.env.VITE_VARK_EMAILJSSERVICE,
        import.meta.env.VITE_VARK_EMAILJSTEMPLATE,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.textArea,
        },
        import.meta.env.VITE_VARK_EMAILJSKEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          reset();
        },
        (error) => {
          console.error('FAILED...', error);
          setError('general', {
            message: t('contact.globalError'),
            type: 'custom',
          });
        }
      );
  };

  const defaultImage: ImageWithCaption = { src: '', alt: '' };
  const image = data?.[0] ?? defaultImage;

  return (
    <div className={style.formMainContainer}>
      <img src={BACKGROUND} className={style.backgroundImage} />
      <div
        ref={contactImageRef}
        className={`${style.contactImageContainer} ${
          isContactImageVisible ? 'animate__animated animate__fadeIn' : ''
        }`}
      >
        {isLoading ? (
          <LoaderErrorContainer isGallery={false}>
            <Loader />
          </LoaderErrorContainer>
        ) : (
          <img className={style.contactImage} src={image.src} alt={image.alt} />
        )}
      </div>
      <div
        className={`${style.formContainer} ${
          isFormVisible ? 'animate__animated animate__fadeIn' : ''
        }`}
        ref={formRef}
      >
        <h1 className={style.contactImageHeader}>{t('contact.formHeader')}</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className={style.form}
        >
          <ContactFormTopSection register={register} errors={errors} />
          <ContactFormBottomSection register={register} errors={errors} />
        </form>
      </div>
    </div>
  );
}
