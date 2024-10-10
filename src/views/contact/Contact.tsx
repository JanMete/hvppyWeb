import React from 'react';
import ContactForm from '../../Components/contactForm/ContactForm';

export default function Contact() {
  const Location = React.lazy(
    () => import('../../Components/location/Location')
  );
  return (
    <>
      <ContactForm />
      <Location />
    </>
  );
}
