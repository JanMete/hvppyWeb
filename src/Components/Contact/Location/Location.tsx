import styles from './location.module.css';
import { useEffect, useState } from 'react';
import jsonp from 'jsonp';

const validateEmail = (email: string) => {
  const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
  return isValidEmail ? [] : ['Please enter a valid Email address'];
};

export default function Location() {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [responseBoxIsVisible, setResponseBoxIsVisible] = useState(false);
  const [isMailCorrect, setIsMailCorrect] = useState(false);
  const [keepCheckingEmail, setKeepCheckingEmail] = useState(false);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setKeepCheckingEmail(true);

    const emailErrors = validateEmail(email);
    setEmailErrors(emailErrors);

    if (emailErrors.length > 0) {
      setResponseMessage('Please enter valid Email');
      setResponseBoxIsVisible(true);
      setIsMailCorrect(false);
      return;
    }

    const url = import.meta.env.VITE_MAILCHIMPURL;
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
      const { msg }: { msg: string } = data;

      if (msg.includes('Please enter a value')) {
        setResponseMessage('Please enter your Email');
        setResponseBoxIsVisible(true);
        setIsMailCorrect(false);
      } else {
        setResponseMessage(msg);
        setResponseBoxIsVisible(true);
        setIsMailCorrect(true);
        setEmail('');
      }
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setResponseBoxIsVisible(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [responseBoxIsVisible]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmailValue = e.target.value;
    setEmail(newEmailValue);

    if (keepCheckingEmail) {
      const emailErrors = validateEmail(newEmailValue);
      setEmailErrors(emailErrors);
    }
  };

  return (
    <div className={styles.locationContainer}>
      <div
        className={`${styles.responseMessageContainer} ${
          responseBoxIsVisible
            ? isMailCorrect
              ? styles.showCorrecResponseMessageContainer
              : styles.showIncorrecResponseMessageContainer
            : ''
        }`}
      >
        {responseMessage}
      </div>
      <section className={styles.sectionContainer}>
        <div className={styles.iframeContainer}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.2209756295504!2d19.927753369678012!3d50.06973585901462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b008149a3c5%3A0x2f0523177ae265b!2sBlack%20mood%20Tattoo%20Studio!5e0!3m2!1spl!2spl!4v1705498982989!5m2!1spl!2spl'
            frameBorder='0'
            width='600'
            height='450'
            style={{ border: 0 }}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
      <section className={styles.sectionContainer}>
        <div className={styles.topRightSection}>
          <div className={styles.subsectionContainer}>
            <h2 className={styles.subsectionHeading}>Location</h2>
            <div>
              <p>Teofila Lenartowicza 7/7</p>
              <p>31-148 Kraków</p>
            </div>
          </div>
          <div className={styles.subsectionContainer}>
            <h2 className={styles.subsectionHeading}>Contact</h2>
            <p>TATTOOHVPPY@GMAIL.COM</p>
          </div>
        </div>
        <div>
          <h2 className={styles.subsectionHeading}>Sign up for NewsLetter</h2>
          <form className={styles.newsletterForm} onSubmit={onSubmit}>
            <input
              type='email'
              name='email'
              value={email}
              className={` ${
                !isMailCorrect && emailErrors.length > 0
                  ? styles.errorBorder
                  : ''
              }`}
              placeholder='Enter your email'
              onChange={handleEmailChange}
            />
            <input
              type='submit'
              className={styles.newsLetterSendButton}
              value='Send'
            />
          </form>
        </div>
      </section>
    </div>
  );
}
