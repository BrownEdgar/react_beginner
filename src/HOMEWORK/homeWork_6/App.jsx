import React, { useState } from 'react';
import './App.scss';
import Modal from './Modal/Modal.jsx';


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
        variant='dark'
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam at dolor cum rem atque adipisci modi nisi saepe distinctio perferendis. Possimus facere quos, corporis labore repudiandae qui et soluta libero.</p>
      </Modal>
    </div>
  );
}

export default App;
