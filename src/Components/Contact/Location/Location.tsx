import styles from './location.module.css';
import { useEffect, useState } from 'react';
import jsonp from 'jsonp';

export default function Location() {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [responseBoxIsVisible, setResponseBoxIsVisible] = useState(false);
  const [isMailCorrect, setIsMailCorrect] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = import.meta.env.VITE_MAILCHIMPURL;
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
      const { msg }: { msg: string } = data;
      if (msg.includes('0')) {
        const slicedMsg = msg.slice(3, -1);
        setResponseMessage(slicedMsg);
        setResponseBoxIsVisible(true);
        setIsMailCorrect(false);
      } else if (
        msg.includes('The domain portion of the email address is invalid')
      ) {
        setResponseMessage(msg);
        setResponseBoxIsVisible(true);
        setIsMailCorrect(false);
      } else {
        setResponseMessage(msg);
        setResponseBoxIsVisible(true);
        setIsMailCorrect(true);
      }
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setResponseBoxIsVisible(false);
    }, 4000);

    return () => clearTimeout(timeoutId); // Cleanup on component unmount or re-render
  }, [responseBoxIsVisible]);

  return (
    <div className={styles.locationContainer}>
      {
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
      }
      <div className={styles.googleMapsContainer}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.2209756295504!2d19.927753369678012!3d50.06973585901462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b008149a3c5%3A0x2f0523177ae265b!2sBlack%20mood%20Tattoo%20Studio!5e0!3m2!1spl!2spl!4v1705498982989!5m2!1spl!2spl'
          width='600'
          height='450'
          style={{ border: 0 }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className={styles.infoContainer}>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type='submit' />
        </form>
      </div>
    </div>
  );
}
