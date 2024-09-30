import './index.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './views/layout/Layout.tsx';
import global_en from './translations/en/global.json';
import global_pl from './translations/pl/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'animate.css';
import LoaderErrorContainer from './Components/loaderErrorContainer/loaderErrorContainer.tsx';
import Loader from './Components/loader/Loader.tsx';

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

const MainPage = React.lazy(() => import('./views/mainPage/MainPage.tsx'));
const Contact = React.lazy(() => import('./views/contact/Contact.tsx'));
const About = React.lazy(() => import('./views/about/About.tsx'));
const ArtworkMenu = React.lazy(
  () => import('./views/artworkMenu/ArtworkMenu.tsx')
);
const ArtworkGallery = React.lazy(
  () => import('./views/artworkGallery/ArtworkGallery.tsx')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: (
          <Suspense
            fallback={
              <LoaderErrorContainer isGallery={false}>
                <Loader />
              </LoaderErrorContainer>
            }
          >
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense
            fallback={
              <LoaderErrorContainer isGallery={false}>
                <Loader />
              </LoaderErrorContainer>
            }
          >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/artwork',
        element: (
          <Suspense
            fallback={
              <LoaderErrorContainer isGallery={false}>
                <Loader />
              </LoaderErrorContainer>
            }
          >
            <ArtworkMenu />
          </Suspense>
        ),
      },
      {
        path: '/artwork/:category',
        element: (
          <Suspense
            fallback={
              <LoaderErrorContainer isGallery={false}>
                <Loader />
              </LoaderErrorContainer>
            }
          >
            <ArtworkGallery />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense
            fallback={
              <LoaderErrorContainer isGallery={false}>
                <Loader />
              </LoaderErrorContainer>
            }
          >
            <About />
          </Suspense>
        ),
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
