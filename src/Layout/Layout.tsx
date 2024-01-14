import WebHeader from './LayoutComponents/WebHeader';
import MobileHeader from './LayoutComponents/MobileHeader';
import Footer from './LayoutComponents/Footer';

type LayoutProp = {
  children: React.ReactNode;
  isMobile: boolean;
};

export default function Layout({ children, isMobile }: LayoutProp) {
  return (
    <>
      {isMobile ? <MobileHeader /> : <WebHeader />}
      {children}
      <Footer />
    </>
  );
}
