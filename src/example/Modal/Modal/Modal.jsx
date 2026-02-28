import './Modal.scss';
import { X } from 'lucide-react';

function Modal({ title, children, isOpen, setisOpen, hideCloseIcon = false }) {



  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='Modal'
    >
      <div className='Modal__content'>
        {!hideCloseIcon && <span className='Modal__close' onClick={() => setisOpen(false)}>
          <X size={16} strokeWidth={7} />
        </span>}
        {title && <h1 className='Modal__title'>{title}</h1>}
        <div className='Modal__center'>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
