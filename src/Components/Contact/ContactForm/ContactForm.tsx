import { useRef } from 'react';
import styles from './contactForm.module.css';
import PORTRAIT from '../../../assets/Contact/portrait.jpeg';
import useContactForm from '../../../hooks/useContactForm';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { useTranslation } from 'react-i18next';

type useContactFormType = {
  name: string;
  email: string;
  message: string;
  isSubmitting: boolean;
  errors: string[];
  form: React.RefObject<HTMLFormElement>;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendEmail: (e: React.FormEvent<HTMLFormElement>) => void;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function ContactForm() {
  const [t] = useTranslation('global');
  const {
    name,
    email,
    message,
    isSubmitting,
    errors,
    form,
    handleEmailChange,
    sendEmail,
    handleNameChange,
    handleMessageChange,
  }: useContactFormType = useContactForm();

  // INTERSECTION OBSERVER

  const imageRef = useRef<HTMLImageElement>(null);
  const imageBottom = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const isImageVisible = useIntersectionObserver(imageRef);
  const isImageBottomVisible = useIntersectionObserver(imageBottom);
  const isFormVisible = useIntersectionObserver(formRef);

  // INTERSECTION OBSERVER END

  const nameError = errors.includes('Please enter your Name');
  const emailError = errors.includes('Please enter your Email');
  const invalidEmailError = errors.includes(
    'Please enter a valid Email address'
  );
  const messageError = errors.includes('Please enter a Message');

  return (
    <div className={styles.contactFormMainContainer}>
      <div className={styles.formHeading}>
        <img
          ref={imageRef}
          src={PORTRAIT}
          alt=''
          className={`${isImageVisible ? styles.showElement : ''}`}
        />
        <div ref={imageBottom} className={styles.formHeadingBottomContainer}>
          <h1 className={`${isImageBottomVisible ? styles.showElement : ''}`}>
            {t('contact.formHeader')}
          </h1>
        </div>
      </div>
      <form
        ref={form}
        className={`${styles.mailForm} ${
          isFormVisible ? styles.showElement : ''
        }`}
        onSubmit={sendEmail}
      >
        <div className={styles.topFormContainer}>
          <div className={styles.inputContainer}>
            <input
              value={name}
              onChange={handleNameChange}
              className={`${nameError ? styles.errorBorder : ''}`}
              type='text'
              name='user_name'
              placeholder={t('contact.formName')}
            />
            <p
              className={`${styles.errorMessage} ${
                nameError ? styles.showErrorMessage : ''
              }`}
            >
              {t('contact.enterName')}
            </p>
          </div>
          <div className={styles.inputContainer}>
            <input
              value={email}
              onChange={handleEmailChange}
              className={`${styles.textInput} 
               ${emailError ? styles.errorBorder : ''}  ${
                invalidEmailError ? styles.errorBorder : ''
              }`}
              type='email'
              name='user_email'
              placeholder={t('contact.formEmail')}
            />
            <p
              className={`${styles.errorMessage} ${
                emailError ? styles.showErrorMessage : ''
              }`}
            >
              {t('contact.enterEmail')}
            </p>

            <p
              className={`${styles.errorMessage} ${
                invalidEmailError ? styles.showErrorMessage : ''
              }`}
            >
              {t('contact.validEmail')}
            </p>
          </div>
        </div>
        <div ref={formRef} className={styles.textSubmit}>
          <div className={styles.inputContainer}>
            <textarea
              value={message}
              onChange={handleMessageChange}
              style={{ resize: 'none' }}
              name='message'
              className={`${messageError ? styles.errorBorder : ''}`}
              placeholder={t('contact.formMessage')}
            />
            <p
              className={`${styles.errorMessage} ${
                messageError ? styles.showErrorMessage : ''
              }`}
            >
              {t('contact.enterMessage')}
            </p>
          </div>
          <input
            className={`${styles.submitInput} ${
              isSubmitting ? styles.disabled : ''
            }`}
            disabled={isSubmitting}
            type='submit'
            value={t('contact.send')}
          />
        </div>
      </form>
    </div>
  );
}
