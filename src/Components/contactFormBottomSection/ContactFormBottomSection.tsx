import style from './contactFormBottomSection.module.css';
import { ContactFormComponentProps } from '../../types/formTypes';
import { useTranslation } from 'react-i18next';
import SubBtn from '../subBtn/SubBtn';

export default function ContactFormBottomSection({
  register,
  errors,
}: ContactFormComponentProps) {
  const { t } = useTranslation('global');
  return (
    <div className={style.bottomContainer}>
      <div className={style.textAreaContainer}>
        <textarea
          className={style.textareaInput}
          placeholder={t('contact.enterMessage')}
          id='textArea'
          {...register('textArea', {
            required: t('contact.enterMessage'),
          })}
        />
        {errors.textArea?.message && (
          <p className={style.errorMsg}>{String(errors.textArea?.message)}</p>
        )}
      </div>
      <div className={style.subBtnContainer}>
        {errors.general && (
          <span className={style.errorMsg}>{errors.general.message}</span>
        )}
        <SubBtn />
      </div>
    </div>
  );
}
