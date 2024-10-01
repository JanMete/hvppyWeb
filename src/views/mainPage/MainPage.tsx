import React, { Suspense } from 'react';
import Loader from '../../Components/loader/Loader';
import LoaderErrorContainer from '../../Components/loaderErrorContainer/loaderErrorContainer';
import Hero from '../../Components/hero/Hero';

const MainPage = () => {
  const Attributes = React.lazy(
    () => import('../../Components/attributes/Attributes')
  );
  const Aftercare = React.lazy(
    () => import('../../Components/aftercare/Aftercare')
  );
  return (
    <>
      <Hero />
      <Suspense
        fallback={
          <LoaderErrorContainer withBackground={false}>
            <Loader />
          </LoaderErrorContainer>
        }
      >
        <Attributes />
      </Suspense>
      <Suspense
        fallback={
          <LoaderErrorContainer withBackground={false}>
            <Loader />
          </LoaderErrorContainer>
        }
      >
        <Aftercare />
      </Suspense>
    </>
  );
};

export default MainPage;
