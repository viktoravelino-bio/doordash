import { createPortal } from 'react-dom';
import { classNames } from '../../../lib/classNames';
import './Modal.scss';

function ModalHeader(props) {
  return <header {...props} />;
}

function ModalBody(props) {
  return <div className="body" {...props} />;
}

function ModalFooter(props) {
  return <footer {...props} />;
}

function ModalContainer({ children, className, onClose, fullScreen, visible }) {
  return (
    <div
      className={classNames('modal__container', className, {
        'full-screen': Boolean(fullScreen),
        visible: Boolean(visible),
      })}
      onClick={onClose}
    >
      <div
        className={classNames('modal__content')}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export const Modal = Object.assign(ModalContainer, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
