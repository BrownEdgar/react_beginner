import { Eye, EyeOff } from 'lucide-react';



export default function List({ values = [], handleDelete, setId }) {


  return (
    <ul>
      {values.map(user => (
        <li key={user.id}>
          <span>
            {user.createdAt}
            <br />
            {user.name} /
          </span>
          <span>password: {user.show ? user.password : "********"}
            {
              user.show ?
                <EyeOff size={30} strokeWidth={3} onClick={() => setId(user.id)} />
                : <Eye size={30} strokeWidth={3} onClick={() => setId(user.id)} />
            }

          </span>
          <button className='delete' onClick={() => handleDelete(user.id)}>delete</button>
        </li>
      ))}
    </ul>);
}


