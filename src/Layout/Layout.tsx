import WebHeader from './LayoutComponents/WebHeader/WebHeader';
import MobileHeader from './LayoutComponents/MobileHeader/MobileHeader';
import Footer from './LayoutComponents/Footer/Footer';

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
      <div>
        {isMobile ? (
          <MobileHeader />
        ) : (
          <WebHeader scrollPosition={scrollPosition} />
        )}
        {children}
        <Footer />
      </div>
    </>
  );
}
