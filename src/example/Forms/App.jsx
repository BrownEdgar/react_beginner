import { useState } from 'react';
import './App.scss';
import List from './List';
import RegisterForm from './register-form';

export default function App() {
  const [values, setValue] = useState([]);

  const setId = (id) => {
    const copy = [...values];
    const user = copy.find((user) => user.id === id);
    if (user) {
      user.show = !user.show;
    }
    setValue(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    const isExist = values.some((user) => user.name.toLowerCase() === name.value.toLowerCase());
    if (isExist) {
      alert('This name already exists');
      return;
    }
    const user = {
      name: name.value,
      password: password.value,
      show: false,
      id: Date.now(),
      createdAt: new Date().toLocaleTimeString(),
    };
    setValue([...values, user]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    const newArr = values.filter((user) => user.id !== id);
    setValue(newArr);
  };

  return (
    <div>
      <h1>work with react form</h1>
      <RegisterForm submit={handleSubmit} />
      <hr />
      <List
        values={values}
        handleDelete={handleDelete}
        setId={setId}
      />
    </div>
  );
}
