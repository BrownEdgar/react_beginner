import { useState } from "react";
import './App.scss';
import List from './List';

export default function App() {
  const [value, setValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const isExist = value.some(user => user.name.toLowerCase() === name.value.toLowerCase());
    if (isExist) {
      alert("This name already exists");
      return;
    }
    const user = {
      name: name.value,
      id: Date.now(),
      createdAt: new Date().toLocaleTimeString()
    }
    setValue([...value, user]);
    e.target.reset();
  }

  const handleDelete = (id) => {
    const newArr = value.filter((user) => user.id !== id)
    setValue(newArr)
  }

  return <div>
    <h1>work with react form</h1>

    <form onSubmit={handleSubmit}>
      <input type="text" id='name' required />
      <input type="submit" value="save" />
    </form>
    <hr />
    <List value={value} handleDelete={handleDelete} />
  </div>;
}
