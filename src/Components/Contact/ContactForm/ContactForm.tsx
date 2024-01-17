import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contactForm.module.css';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current!,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contactFormMainContainer}>
      <div className={styles.formHeading}>
        <div className={styles.formHeadingBottomContainer}>
          <h1>Text me!</h1>
          <p>
            <a href='mailto:someone@example.com'>TATTOOHVPPY@GMAIL.COM</a>
          </p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.topFormContainer}>
          <input
            className={styles.textInput}
            type='text'
            name='user_name'
            placeholder='NAME'
          />
          <input
            className={styles.textInput}
            type='email'
            name='user_email'
            placeholder='EMAIL'
          />
        </div>
        <div className={styles.textSubmit}>
          <textarea
            name='message'
            placeholder='What kind of tattoo would you like?'
          />
          <input className={styles.submitInput} type='submit' value='Send' />
        </div>
      </form>
    </div>
  );
}
