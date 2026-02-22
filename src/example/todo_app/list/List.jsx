import './List.scss';
import { X } from 'lucide-react';

function List({ data = [], itemDelete, toggleTodo }) {
  return (
    <div className='List'>
      <ul className='List__items'>
        {data.map((item) => (
          <li
            key={item.id}
            className='List__item'
          >
            <input
              type='checkbox'
              name={`todo-${item.id}`}
              id={`todo-${item.id}`}
              checked={item.completed}
              onChange={() => toggleTodo(item.id)}
            />

            <label
              htmlFor={`todo-${item.id}`}
              className={item.completed ? 'List__completed' : ''}
            >
              {item.message}
            </label>
            <button
              className='delete'
              onClick={() => itemDelete(item.id)}
            >
              <X
                size={16}
                strokeWidth={7}
                color='#4f4f4f'
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
