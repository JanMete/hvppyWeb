import styles from './mobileMenu.module.css';
import { MobileMenuProps } from '../../types/isMobileMenuOpenTypes';
import MobileMenuLogo from '../mobileMenuLogo/MobileMenuLogo';
import MobileMenuLinks from '../mobileMenuLinks/MobileMenuLinks';
import MobileMenuIcons from '../mobileMenuIcons/MobileMenuIcons';
import HeaderMenuLangBtns from '../headerMenuLangBtns/HeaderMenuLangBtns';

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) => {
  const scrollToTopCloseMenu = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section
      className={`${styles.mobileMenuContainer} ${
        isMobileMenuOpen ? styles.mobileMenuContainerOpened : ''
      }`}
    >
      <MobileMenuLogo scrollToTopCloseMenu={scrollToTopCloseMenu} />
      <MobileMenuLinks scrollToTopCloseMenu={scrollToTopCloseMenu} />
      <div className={styles.iconsLangContainer}>
        <MobileMenuIcons />
        <HeaderMenuLangBtns isMobile={true} />
      </div>
    </section>
  );
};

export default MobileMenu;
