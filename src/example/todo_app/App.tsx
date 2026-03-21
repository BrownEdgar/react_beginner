import { useReducer } from 'react';
import type React from 'react';
import './App.scss';
import ToDoForm from './form/Form';
import List from './list/List';
import reducer, { initialState } from './reducer';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_UNCOMPLETED } from './actions';
import type { ITodo } from '@/types/types';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.elements.namedItem('message') as HTMLInputElement).value;
    const todo: ITodo = {
      id: Date.now(),
      message,
      completed: false,
    };
    dispatch({ type: ADD_TODO, payload: todo });
    form.reset();
  };

  const itemDelete = (id: number) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const toggleTodo = (id: number) => {
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
