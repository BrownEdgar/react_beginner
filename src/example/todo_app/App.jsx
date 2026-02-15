import { useReducer } from 'react';
import './App.scss';
import ToDoForm from './form/Form';
import List from './list/List';
import reducer, { initialState } from './reducer';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_UNCOMPLETED } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const todo = {
      id: Date.now(),
      message,
      completed: false,
    };
    dispatch({ type: ADD_TODO, payload: todo });
    e.target.reset();
  };

  const itemDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
    dispatch({ type: UPDATE_UNCOMPLETED });
  };

  return (
    <div className='App'>
      <h1 className='App__title'>Your To Do</h1>
      <ToDoForm handleSubmit={handleSubmit} />
      <List
        data={state.todos}
        itemDelete={itemDelete}
        toggleTodo={toggleTodo}
      />
      <p>Your remaining todos: {state.uncompleted}</p>
    </div>
  );
}

export default App;
