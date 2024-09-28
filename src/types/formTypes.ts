import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface ContactFormData {
  name: string;
  email: string;
  textArea: string;
  general: string;
}

export interface ContactFormComponentProps {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
}
