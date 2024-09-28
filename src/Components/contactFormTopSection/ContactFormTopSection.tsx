import { useTranslation } from 'react-i18next';
import { ContactFormComponentProps } from '../../types/formTypes';
import FormInput from '../formInput/FormInput';
import style from './contactFormTopSection.module.css';

export default function ContactFormTopSection({
  register,
  errors,
}: ContactFormComponentProps) {
  const [t] = useTranslation('global');
  return (
    <div className={style.topInputsContainer}>
      <FormInput
        id='name'
        type='text'
        placeholderKey='contact.enterName'
        register={register('name', {
          required: t('contact.enterName'),
        })}
        error={errors.name}
      />
      <FormInput
        id='email'
        type='email'
        placeholderKey='contact.enterEmail'
        register={register('email', {
          required: t('contact.enterEmail'),
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            message: t('contact.validEmail'),
          },
        })}
        error={errors.email}
      />
    </div>
  );
}
