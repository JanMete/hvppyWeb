import styles from './location.module.css';
import { useEffect, useRef, useState } from 'react';
import jsonp from 'jsonp';
import KUTE from 'kute.js';

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

  // INTERSECTION OBSERVER

  const mapRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);

  useEffect(() => {
    const mapObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsMapVisible(entry.isIntersecting);
    });

    const locationObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsLocationVisible(entry.isIntersecting);
    });

    const contactObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsContactVisible(entry.isIntersecting);
    });

    const newsletterObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsNewsletterVisible(entry.isIntersecting);
    });

    if (mapRef.current) {
      mapObserver.observe(mapRef.current);
    }

    if (locationRef.current) {
      locationObserver.observe(locationRef.current);
    }

    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }

    if (newsletterRef.current) {
      newsletterObserver.observe(newsletterRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapObserver.unobserve(mapRef.current);
      }

      if (locationRef.current) {
        locationObserver.unobserve(locationRef.current);
      }

      if (contactRef.current) {
        contactObserver.unobserve(contactRef.current);
      }

      if (newsletterRef.current) {
        newsletterObserver.unobserve(newsletterRef.current);
      }
    };
  }, []);
  // INTERSECTION OBSERVER END

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
    const tween = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);

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
        <div
          ref={mapRef}
          className={`${isMapVisible ? styles.showElement : ''} ${
            styles.iframeContainer
          }`}
        >
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
          <div
            ref={locationRef}
            className={`${isLocationVisible ? styles.showElement : ''} ${
              styles.subsectionContainerLocation
            }`}
          >
            <h2 className={styles.subsectionHeading}>Location</h2>
            <div>
              <p>Teofila Lenartowicza 7/7</p>
              <p>31-148 Kraków</p>
            </div>
          </div>
          <div
            ref={contactRef}
            className={`${isContactVisible ? styles.showElement : ''} ${
              styles.subsectionContainerContact
            }`}
          >
            <h2 className={styles.subsectionHeading}>Contact</h2>
            <p>TATTOOHVPPY@GMAIL.COM</p>
          </div>
        </div>
        <div
          ref={newsletterRef}
          className={`${styles.newsletterContaier} ${
            isNewsletterVisible ? styles.showElement : ''
          }`}
        >
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
      <article className={styles.bolbContainer}>
        <svg
          className={styles.blobMotion}
          id='visual'
          viewBox='0 0 960 540'
          width='960'
          height='540'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.1'
        >
          <g transform='translate(450.7256843113689 283.4942824330989)'>
            <path
              id='blob1'
              d='M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9'
              fill='#1ac433'
            ></path>
          </g>
          <g
            transform='translate(509.54377535978017 281.49390864595887)'
            style={{ visibility: 'hidden' }}
          >
            <path
              id='blob2'
              d='M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9'
              fill='#1ac433'
            ></path>
          </g>
        </svg>
      </article>
    </div>
  );
}
