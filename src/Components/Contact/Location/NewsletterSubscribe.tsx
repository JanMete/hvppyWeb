import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL =
    'https://gmail.us11.list-manage.com/subscribe/post?u=5ef10faefbff392fb97f0012c&amp;id=e5eb325a55&amp;f_id=006fa8e0f0';

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
