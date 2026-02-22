import { useRef } from 'react';
import './Modal.scss';

function Modal({ title, children }, isOpen, setIsOpen, hideCloseIcon = false) {
  return (
    <div className='Modal'>
      <div className='Modal__content'>
        {!hideCloseIcon && (
          <span
            className='Modal__close'
            onClick={() => setIsOpen(false)}
          >
            X
          </span>
        )}
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Modal;
