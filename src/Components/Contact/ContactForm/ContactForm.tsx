import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const validationErrors: string[] = [];

    if (name.length <= 0) {
      validationErrors.push('Please enter your Name');
    }

    if (email.length <= 0) {
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmailValue = e.target.value;
    setEmail(newEmailValue);

    const isValidEmail = /^\S+@\S+\.\S+$/.test(newEmailValue);

    if (!isValidEmail && newEmailValue.length > 0) {
      setErrors((prevErrors) => [
        ...prevErrors,
        'Please enter a valid Email address',
      ]);
    } else {
      setErrors((prevErrors) =>
        prevErrors.filter(
          (error) => error !== 'Please enter a valid Email address'
        )
      );
    }
    setErrors((prevErrors) =>
      prevErrors.filter((error) => error !== 'Please enter your Email')
    );
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setErrors(errors.filter((error) => error !== 'Please enter a Message'));
  };

  return (
    <div className={styles.contactFormMainContainer}>
      <div className={styles.formHeading}>
        <div className={styles.formHeadingBottomContainer}>
          <h1>Text me!</h1>
          <p>
            <a className={styles.mailLink} href='mailto:someone@example.com'>
              TATTOOHVPPY@GMAIL.COM
            </a>
          </p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.topFormContainer}>
          <input
            value={name}
            onChange={handleNameChange}
            className={styles.textInput}
            type='text'
            name='user_name'
            placeholder='Name'
          />
          {errors.includes('Please enter your Name') && (
            <p className={styles.error}>Please enter your Name</p>
          )}
          <input
            value={email}
            onChange={handleEmailChange}
            className={styles.textInput}
            type='email'
            name='user_email'
            placeholder='Email'
          />
          {errors.includes('Please enter your Email') && (
            <p className={styles.error}>Please enter your Email</p>
          )}
          {errors.includes('Please enter a valid Email address') && (
            <p className={styles.error}>Please enter a valid Email address</p>
          )}
        </div>
        <div className={styles.textSubmit}>
          <textarea
            value={message}
            onChange={handleMessageChange}
            name='message'
            placeholder='What kind of tattoo would you like?'
          />
          {errors.includes('Please enter a Message') && (
            <p className={styles.error}>Please enter a Message</p>
          )}
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
