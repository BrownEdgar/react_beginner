import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = e.target
    const newUsers = {
      id: Date.now(),
      name: name.value,
      email: email.value,
    }

    setUsers([...users, newUsers])
    e.target.reset()
  }

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" name='name' id='name' required />
        <input type="email" name='email' id='email' required />
        <input type="submit" value={"Save"} />
      </form>
      <div className='container'>
        {
          users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default App
