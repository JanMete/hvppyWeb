declare const process: {
  env: {
    REACT_APP_MAILCHIMPURL: string;
  };
};

import { useEffect, useState } from 'react';
import jsonp from 'jsonp';
import KUTE from 'kute.js';

const useLocationHook = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [responseBoxIsVisible, setResponseBoxIsVisible] = useState(false);
  const [isMailCorrect, setIsMailCorrect] = useState(false);
  const [keepCheckingEmail, setKeepCheckingEmail] = useState(false);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);

  const validateEmail = (email: string) => {
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    return isValidEmail ? [] : ['Please enter a valid Email address'];
  };

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

    const url = process.env.REACT_APP_MAILCHIMPURL;
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
  return {
    email,
    setEmail,
    responseMessage,
    setResponseMessage,
    responseBoxIsVisible,
    setResponseBoxIsVisible,
    isMailCorrect,
    setIsMailCorrect,
    keepCheckingEmail,
    setKeepCheckingEmail,
    emailErrors,
    setEmailErrors,
    onSubmit,
    handleEmailChange,
  };
};
export default useLocationHook;
