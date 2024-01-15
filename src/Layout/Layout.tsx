import WebHeader from './LayoutComponents/WebHeader';
import MobileHeader from './LayoutComponents/MobileHeader';
import Footer from './LayoutComponents/Footer';

type LayoutProp = {
  children: React.ReactNode;
  isMobile: boolean;
  scrollPosition: number;
};

export default function Layout({
  children,
  isMobile,
  scrollPosition,
}: LayoutProp) {
  return (
    <>
      {isMobile ? (
        <MobileHeader scrollPosition={scrollPosition} />
      ) : (
        <WebHeader scrollPosition={scrollPosition} />
      )}
      {children}
      <Footer />
    </>
  );
}
