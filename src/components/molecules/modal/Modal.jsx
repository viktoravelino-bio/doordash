import { useEffect, useRef } from 'react';
import { CloseOutlinedIcon } from '../../../assets/icons';
import { IconButton } from '../../atoms/IconButton';
import './Modal.scss';

export const Modal = ({ children, visible, onClose, title }) => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const boxRef = useRef(null);

  function handleShow() {
    const container = containerRef.current;
    container.style.display = 'block';
    container.classList.remove('hide');
    container.classList.add('show');
  }

  function handleClose() {
    const container = containerRef.current;
    container.classList.remove('show');
    container.classList.add('hide');
  }

  function handleOnScrollShowHeaderShadow(e) {
    if (e.target.scrollTop > headerRef.current.clientHeight) {
      headerRef.current.classList.add(
        'animate__fadeInDown',
        'modal__header--fixed'
      );
    } else {
      headerRef.current.classList.remove(
        'animate__fadeInDown',
        'modal__header--fixed'
      );
    }
  }

  useEffect(() => {
    if (visible) {
      handleShow();
    } else {
      handleClose();
    }

    return () => {
      boxRef.current.scrollTop = 0;
    };
  }, [visible]);

  return (
    <div
      ref={containerRef}
      className="modal animate__animated"
      onAnimationEnd={() => {
        if (!visible) {
          containerRef.current.style.display = 'none';
        }
      }}
    >
      <div className="modal__background" onClick={onClose} />

      <div
        className="modal__box"
        onScroll={handleOnScrollShowHeaderShadow}
        ref={boxRef}
      >
        <div className="modal__header animate__animated" ref={headerRef}>
          <IconButton onClick={onClose} icon={CloseOutlinedIcon} />
          {title && <h2 className="modal__header__title">{title}</h2>}
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};
