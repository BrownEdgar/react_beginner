// 
import { useEffect, useRef } from 'react';
import './Modal.scss';
import { X } from 'lucide-react';

function Modal({ title, children, isOpen, setisOpen, hideCloseIcon = false }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      console.log(e.target);

      if (e.target === modalRef?.current) {
        setisOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      console.log('close modal');

      window.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='Modal'
      ref={modalRef}
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
