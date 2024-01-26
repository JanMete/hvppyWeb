declare const process: {
  env: {
    REACT_APP_EMAILJS1: string;
    REACT_APP_EMAILJS2: string;
    REACT_APP_EMAILJS3: string;
  };
};

import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

const useContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [keepCheckingEmail, setKeepCheckingEmail] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string) => {
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    return isValidEmail ? [] : ['Please enter a valid Email address'];
  };

  useEffect(() => {
    if (keepCheckingEmail) {
      const emailErrors = validateEmail(email);

      setErrors((prevErrors) =>
        prevErrors
          .filter(
            (error) =>
              ![
                'Please enter a valid Email address',
                'Please enter your Email',
              ].includes(error)
          )
          .concat(emailErrors)
      );
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

    const emailjs1 = process.env.REACT_APP_EMAILJS1;
    const emailjs2 = process.env.REACT_APP_EMAILJS2;
    const emailjs3 = process.env.REACT_APP_EMAILJS3;
    console.log('EmailJS 1:', emailjs1);
    console.log('EmailJS 2:', emailjs2);
    console.log('EmailJS 3:', emailjs3);

    emailjs.sendForm(emailjs1, emailjs2, form.current!, emailjs3).then(
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
  return {
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
  };
};
export default useContactForm;
