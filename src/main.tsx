import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './views/layout/Layout.tsx';
import MainPage from './views/mainPage/MainPage.tsx';
import Contact from './views/contact/Contact.tsx';
import About from './views/about/About.tsx';
import global_en from './translations/en/global.json';
import global_pl from './translations/pl/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'animate.css';
import ArtworkMenu from './views/artworkMenu/ArtworkMenu.tsx';
import ArtworkGallery from './views/artworkGallery/ArtworkGallery.tsx';

const defaultLang = 'pl';
const lang = JSON.parse(localStorage.getItem('lang')!) || defaultLang;

i18next.init({
  interpolation: { escapeValue: true },
  lng: lang,
  resources: {
    en: {
      global: global_en,
    },
    pl: {
      global: global_pl,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/artwork',
        element: <ArtworkMenu />,
      },
      {
        path: '/artwork/:category',
        element: <ArtworkGallery />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </QueryClientProvider>
);
