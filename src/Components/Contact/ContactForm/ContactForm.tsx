import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contactForm.module.css';
import PORTRAIT from '../../../assets/portrait.jpeg';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [keepCheckingEmail, setKeepCheckingEmail] = useState(false);

  const validateEmail = (email: string) => {
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    return isValidEmail ? [] : ['Please enter a valid Email address'];
  };

  useEffect(() => {
    if (keepCheckingEmail) {
      const emailErrors = validateEmail(email);

      setErrors((prevErrors) =>
        prevErrors.filter(
          (error) =>
            ![
              'Please enter a valid Email address',
              'Please enter your Email',
            ].includes(error)
        )
      );

      setErrors((prevErrors) => [...prevErrors, ...emailErrors]);
    }
  }, [email, keepCheckingEmail]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmailValue = e.target.value;
    setEmail(newEmailValue);

    if (isSubmitting || keepCheckingEmail) {
      const emailErrors = validateEmail(newEmailValue);

      setErrors((prevErrors) =>
        prevErrors.filter(
          (error) =>
            ![
              'Please enter a valid Email address',
              'Please enter your Email',
            ].includes(error)
        )
      );

      setErrors((prevErrors) => [...prevErrors, ...emailErrors]);
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const validationErrors: string[] = [];

    if (name.length <= 0) {
      validationErrors.push('Please enter your Name');
    }

    if (email.length <= 0) {
      setKeepCheckingEmail(true);
      validationErrors.push('Please enter your Email');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      validationErrors.push('Please enter a valid Email address');
    }

    if (message.length <= 0) {
      validationErrors.push('Please enter a Message');
    }

    setErrors(validationErrors);

    if (validationErrors.length > 0) {
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        'service_a2vvc87',
        'template_ff0idrb',
        form.current!,
        'Awa1JN7Ui5zY3iohp'
      )
      .then(
        () => {
          console.log('Message sent.');
          setIsSubmitting(false);
          setName('');
          setEmail('');
          setMessage('');
          setKeepCheckingEmail(false);
        },
        () => {
          console.log('There was an error sending the message.');
          setIsSubmitting(false);
        }
      );
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrors(errors.filter((error) => error !== 'Please enter your Name'));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setErrors(errors.filter((error) => error !== 'Please enter a Message'));
  };

  const nameError = errors.includes('Please enter your Name');
  const emailError = errors.includes('Please enter your Email');
  const invalidEmailError = errors.includes(
    'Please enter a valid Email address'
  );
  const messageError = errors.includes('Please enter a Message');

  // INTERSECTION OBSERVER

  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isImageBottomVisible, setIsImageBottomVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const imageBottom = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const imgObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsImageVisible(entry.isIntersecting);
    });
    const imageBottomObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsImageBottomVisible(entry.isIntersecting);
    });
    const formObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsFormVisible(entry.isIntersecting);
    });

    if (imageRef.current) {
      imgObserver.observe(imageRef.current);
    }
    if (imageBottom.current) {
      imageBottomObserver.observe(imageBottom.current);
    }
    if (form.current) {
      formObserver.observe(form.current);
    }

    return () => {
      if (imageRef.current) {
        imgObserver.unobserve(imageRef.current);
      }
      if (imageBottom.current) {
        imageBottomObserver.unobserve(imageBottom.current);
      }
      if (form.current) {
        formObserver.unobserve(form.current);
      }
    };
  }, []);

  // INTERSECTION OBSERVER END

  return (
    <div className={styles.contactFormMainContainer}>
      <div className={styles.formHeading}>
        <img
          ref={imageRef}
          src={PORTRAIT}
          alt=''
          className={`${isImageVisible ? styles.showImage : ''}`}
        />
        <div ref={imageBottom} className={styles.formHeadingBottomContainer}>
          <h1 className={`${isImageBottomVisible ? styles.showElement : ''}`}>
            Text me!
          </h1>
          <p className={`${isImageBottomVisible ? styles.showElement : ''}`}>
            <a className={styles.mailLink} href='mailto:someone@example.com'>
              TATTOOHVPPY@GMAIL.COM
            </a>
          </p>
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
              className={`${styles.textInput} ${
                nameError ? styles.errorBorder : ''
              }`}
              type='text'
              name='user_name'
              placeholder='Name'
            />
            <p
              className={`${styles.errorMessage} ${
                nameError ? styles.showErrorMessage : ''
              }`}
            >
              Please enter your Name
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
              placeholder='Email'
            />
            <p
              className={`${styles.errorMessage} ${
                emailError ? styles.showErrorMessage : ''
              }`}
            >
              Please enter your Email
            </p>

            <p
              className={`${styles.errorMessage} ${
                invalidEmailError ? styles.showErrorMessage : ''
              }`}
            >
              Please enter a valid Email
            </p>
          </div>
        </div>
        <div className={styles.textSubmit}>
          <div className={styles.inputContainer}>
            <textarea
              value={message}
              onChange={handleMessageChange}
              style={{ resize: 'none' }}
              name='message'
              className={`${messageError ? styles.errorBorder : ''}`}
              placeholder='What kind of tattoo would you like?'
            />
            <p
              className={`${styles.errorMessage} ${
                messageError ? styles.showErrorMessage : ''
              }`}
            >
              Please enter a Message
            </p>
          </div>
          <input
            className={`${styles.submitInput} ${
              isSubmitting ? styles.disabled : ''
            }`}
            disabled={isSubmitting}
            type='submit'
            value='Send'
          />
        </div>
      </form>
    </div>
  );
}
