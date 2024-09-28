import { useForm } from 'react-hook-form';
import style from './locationForm.module.css';
import axios from 'axios';
import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import SubBtn from '../subBtn/SubBtn';
import { useTranslation } from 'react-i18next';

type newsletterFormDataTypes = {
  email: string;
};

export default function LocationForm() {
  const [t] = useTranslation('global');

  const newsletterRef = useRef(null);
  const isNewsletterVisible = useIntersectionObserver(newsletterRef);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    setError,
  } = useForm<newsletterFormDataTypes>();

  const onSubmit = async (data: newsletterFormDataTypes) => {
    const url = import.meta.env.VITE_VARK_MAILCHIMPURL;

    const subscriberData = {
      email_address: data.email,
      status: 'subscribed',
    };

    try {
      await axios.post(url, subscriberData, {
        headers: {
          Authorization: import.meta.env.VITE_VARK_MAILCHIMPAPIKEY,
        },
      });
    } catch (error) {
      setError('email', {
        message: t('contact.globalError'),
      });
    }
  };

  if (isSubmitSuccessful) {
    return (
      <h1 className={style.newsletterSignedInHeader}>
        {t('location.signedIn')}
      </h1>
    );
  }
  const animationStyles = isNewsletterVisible
    ? 'animate__animated animate__fadeInRight'
    : '';

  return (
    <div
      ref={newsletterRef}
      className={`${style.formMainContainer} ${animationStyles}`}
    >
      <h1>{t('location.newsLetter')}</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.InputContainer}>
          <input
            className={style.input}
            type={'email'}
            placeholder={t('contact.enterEmail')}
            id={'email'}
            {...register('email', {
              required: t('contact.enterEmail'),
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: t('contact.validEmail'),
              },
            })}
          />
          <SubBtn />
        </div>
        {errors.email?.message && (
          <p className={style.errorMsg}>{String(errors.email.message)}</p>
        )}
      </form>
    </div>
  );
}
