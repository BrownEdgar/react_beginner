import { ADD_TODO } from './Actions';

export const initialState = {
  todos: [],
  Uncompleted: 0,
};
function deleteTodo(state, id) {
  const newArray = state.todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  return {
    ...state,
    todos: newArray,
  };
}

function toggleTodo(state, id) {
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  };
}

function deletUncompleted(state) {
  const unCompleted = state.todos.reducer((acc, todo) => {
    if (!todo.completed) {
      acc += 1;
    }
    return acc;
  }, 0);
  return {
    ...state,
    Uncompleted: unCompleted,
  };
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
        Uncompleted: state.Uncompleted + 1,
      };
    }
    case 'DELETE_TODO': {
      return deleteTodo(state, action.payload);
    }
    case 'TOGGLE_TODO': {
      return toggleTodo(state, action.payload);
    }

    case 'DELETE_COMPLETED': {
      return deletUncompleted(state);
    }

    default:
      return state;
  }
}

export default reducer;
