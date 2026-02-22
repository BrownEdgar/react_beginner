import React from 'react';
import './App.scss';
import ToDoForm from './Form/Form';
import List from './List';
import { useReducer } from 'react';
import { ADD_TODO, DELETE_COMPLETED, DELETE_TODO, TOGGLE_TODO } from './Actions';
import reducer, { initialState } from './reducer';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSublit = (e) => {
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
    dispatch({ type: DELETE_COMPLETED, payload: id });
  };
  return (
    <div className='App'>
      <h1 className='App__title'> Your To Do</h1>
      <ToDoForm handleSublit={handleSublit} />
      <List
        data={state.todos}
        itemDelete={itemDelete}
        toggleTodo={toggleTodo}
      />
      <p>Your remaining todos : {state.Uncompleted}</p>
    </div>
  );
}

export default App;
