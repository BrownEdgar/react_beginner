import React, { useState } from 'react';
import './App.scss';
import Modal from './Modal/Modal.jsx';
import { title, children, isOpen } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const togleModal = () => setIsOpen(!isOpen);
  return (
    <div className='App'>
      <button onClick={togleModal}>Open Modal</button>
      <Modal
        title='Exit'
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hideCloseIcon
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptas aliquam
          doloribus, similique hic placeat dicta cupiditate facere eum, distinctio aperiam nulla
          impedit id, molestias magnam minima laboriosam recusandae. Vero.
        </p>
      </Modal>
    </div>
  );
}

export default App;
