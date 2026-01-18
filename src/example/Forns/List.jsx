export default function List({ value = [], handleDelete }) {
  return (
    <ul>
      {value.map(user => (
        <li key={user.id}>
          <span>
            {user.createdAt}
            <br />
            {user.name}
          </span>
          <button className='delete' onClick={() => handleDelete(user.id)}>delete</button>
        </li>
      ))}
    </ul>);
}
