import { useState } from 'react';
import './App.scss';
import List from './List';
import RegisterForm from './register-form';
import type { IUser } from '@/types/types';

export default function App() {
  const [values, setValue] = useState<IUser[]>([]);

  const setId = (id: number) => {
    const copy = [...values];
    const user = copy.find((user) => user.id === id);
    if (user) {
      user.show = !user.show;
    }
    setValue(copy);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameEl = form.querySelector('#name') as HTMLInputElement;
    const passwordEl = form.querySelector('#password') as HTMLInputElement;
    const isExist = values.some((user) => user.name.toLowerCase() === nameEl.value.toLowerCase());
    if (isExist) {
      alert('This name already exists');
      return;
    }
    const user: IUser = {
      name: nameEl.value,
      password: passwordEl.value,
      show: false,
      id: Date.now(),
      createdAt: new Date().toLocaleTimeString(),
    };
    setValue([...values, user]);
    form.reset();
  };

  const handleDelete = (id: number) => {
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
