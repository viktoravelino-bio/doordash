import { useRef } from 'react';
import './AuthModalContainer.scss';

export function AuthModalContainer({ isOpen, onClose, headerTitle, children }) {
  const modalBoxRef = useRef(null);
  function handleShowHeaderShadowWhenScrolling(e) {
    const modalBoxContent = e.target;
    const modalBoxContentTop = modalBoxContent.scrollTop;
    const modalBox = modalBoxRef.current;

    if (modalBoxContentTop > 0) {
      modalBox.classList.add('scrolling');
    } else {
      modalBox.classList.remove('scrolling');
    }
  }

  return (
    <div className={`auth-modal__container ${isOpen ? 'show' : ''}`}>
      <div className="auth-modal__overlay" onClick={onClose} />

      <div className="auth-modal__box" ref={modalBoxRef}>
        <div className="auth-modal__header">
          <button onClick={onClose}>&times;</button>
          <h3>{headerTitle}</h3>
        </div>

        <div
          className="auth-modal__content"
          onScroll={handleShowHeaderShadowWhenScrolling}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
