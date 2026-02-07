import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_UNCOMPLETED } from './actions';

export const initialState = {
  todos: [],
  uncompleted: 0,
};

function deleteTodo(state, id) {
  return {
    todos: state.todos.filter((todo) => todo.id !== id),
  };
}

const toggleTodo = (state, id) => {
  const newArray = state.todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  return {
    ...state,
    todos: newArray,

  }
}

const updateUnCompleted = (state) => {
  const unCompleted = state.todos.reduce((acc, todo) => {
    return !todo.completed ? acc += 1 : acc;
  }, 0);
  return {
    ...state,
    uncompleted: unCompleted,
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        uncompleted: state.uncompleted + 1,
      };
    case DELETE_TODO: {
      return deleteTodo(state, action.payload);
    }
    case TOGGLE_TODO:
      return toggleTodo(state, action.payload);
    case UPDATE_UNCOMPLETED:
      return updateUnCompleted(state);

    default:
      return state;
  }
}

export default reducer;