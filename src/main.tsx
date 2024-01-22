import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Layout/Layout.tsx';
import MainPage from './Components/MainPage/MainPage.tsx';
import Contact from './Components/Contact/Contact.tsx';
import Menu from './Components/Artwork/Menu/Menu.tsx';
import Gallery from './Components/Artwork/Gallery/Gallery.tsx';
import About from './Components/About/About.tsx';

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
  <RouterProvider router={router} />
);
