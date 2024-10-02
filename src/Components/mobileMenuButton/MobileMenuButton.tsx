import { MobileMenuProps } from '../../types/isMobileMenuOpenTypes';
import style from './mobileMenuButton.module.css';

export default function MobileMenuButton({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}: MobileMenuProps) {
  return (
    <div className={style.menuButtonContainer}>
      <button
        aria-label='Open Menu'
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className={style.menuButton}
      >
        <span
          className={`${style.menuButtonItem} ${
            isMobileMenuOpen ? style.menuButtonTopItemRotation : ''
          }`}
        ></span>
        <span
          className={`${style.menuButtonItem} ${
            isMobileMenuOpen ? style.menuButtonMiddleItemHide : ''
          }`}
        ></span>
        <span
          className={`${style.menuButtonItem} ${
            isMobileMenuOpen ? style.menuButtonBottomItemRotation : ''
          }`}
        ></span>
      </button>
    </div>
  );
}
