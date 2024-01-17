import ContactForm from './ContactForm/ContactForm';
import HeroContact from './HeroContact/HeroContact';
import Location from './Location/Location';

export default function Contact() {
  return (
    <div>
      <HeroContact />
      <ContactForm />
      <Location />
    </div>
  );
}
