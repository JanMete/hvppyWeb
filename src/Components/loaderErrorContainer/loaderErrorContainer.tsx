import galleryStyle from './galleryLoaderErrorContainer.module.css';
import defaultStyle from './defaultLoaderErrorContainer.module.css';
import { FunctionComponent, PropsWithChildren } from 'react';

type LoaderErrorContainerProps = {
  withBackground: boolean;
};

const LoaderErrorContainer: FunctionComponent<
  PropsWithChildren<LoaderErrorContainerProps>
> = ({ children, withBackground }) => {
  const style = withBackground ? galleryStyle : defaultStyle;
  return <section className={style.galleryContainer}>{children}</section>;
};

export default LoaderErrorContainer;
