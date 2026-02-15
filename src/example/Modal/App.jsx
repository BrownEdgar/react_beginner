import { useState } from 'react';
import './App.scss';
import Modal from './Modal/Modal';

function App() {
  const [data, setdata] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']);
  const [isOpen, setisOpen] = useState(false);
  const [itemForDelete, setitemForDelete] = useState('');

  const toggleModal = () => {
    setisOpen(!isOpen);
  };

  const handleDelete = () => {
    const newArr = data.filter((elem) => elem !== itemForDelete);
    setdata(newArr);
    setisOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <Modal
          children={<button onClick={handleDelete}>Delete</button>}
          isOpen={isOpen}
          setisOpen={setisOpen}
          hideCloseIcon
        />
      )}
      <h1>Modal</h1>
      <div className='App'>
        <ul className='App_List'>
          {data.map((item, index) => (
            <li key={index}>
              {item}
              <button
                className='delete'
                onClick={() => {
                  toggleModal();
                  setitemForDelete(item);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
