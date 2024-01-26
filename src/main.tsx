import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout.tsx';
import MainPage from './Components/MainPage/MainPage.tsx';
import Contact from './Components/Contact/Contact.tsx';
import Menu from './Components/Artwork/Menu/Menu.tsx';
import Gallery from './Components/Artwork/Gallery/Gallery.tsx';
import About from './Components/About/About.tsx';
import global_en from './translations/en/global.json';
import global_pl from './translations/pl/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: true },
  lng: 'pl',
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
        element: <Menu />,
      },
      {
        path: '/artwork/:category',
        element: <Gallery />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18next}>
    <RouterProvider router={router} />
  </I18nextProvider>
);
