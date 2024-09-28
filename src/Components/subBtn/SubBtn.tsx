import { useTranslation } from 'react-i18next';
import style from './subBtn.module.css';

export default function SubBtn() {
  const { t } = useTranslation('global');
  return <button className={style.submitBtn}>{t('contact.send')}</button>;
}
