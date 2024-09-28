import { useTranslation } from 'react-i18next';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import style from './formInput.module.css';

interface FormInputProps {
  id: string;
  type: string;
  placeholderKey: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function FormInput({
  id,
  type,
  placeholderKey,
  register,
  error,
}: FormInputProps) {
  const { t } = useTranslation('global');

  return (
    <div className={style.inputErrorContainer}>
      <input
        className={style.input}
        type={type}
        placeholder={t(placeholderKey)}
        id={id}
        {...register}
      />
      {error?.message && (
        <p className={style.errorMsg}>{String(error.message)}</p>
      )}
    </div>
  );
}
