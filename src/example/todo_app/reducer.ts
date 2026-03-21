import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_UNCOMPLETED,
} from './actions';
import type { ITodo } from '@/types/types';

export interface TodoState {
  todos: ITodo[];
  uncompleted: number;
}

export const initialState: TodoState = {
  todos: [],
  uncompleted: 0,
};

type AddTodoAction = { type: typeof ADD_TODO; payload: ITodo };
type DeleteTodoAction = { type: typeof DELETE_TODO; payload: number };
type ToggleTodoAction = { type: typeof TOGGLE_TODO; payload: number };
type UpdateUncompletedAction = { type: typeof UPDATE_UNCOMPLETED };

export type TodoAction =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction
  | UpdateUncompletedAction;

function deleteTodo(state: TodoState, id: number): TodoState {
  const todos = state.todos.filter((todo) => todo.id !== id);
  const uncompleted = todos.filter((t) => !t.completed).length;
  return { todos, uncompleted };
}

function toggleTodo(state: TodoState, id: number): TodoState {
  const newArray = state.todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  return {
    ...state,
    todos: newArray,
  };
}

function updateUnCompleted(state: TodoState): TodoState {
  const unCompleted = state.todos.reduce((acc, todo) => {
    return !todo.completed ? acc + 1 : acc;
  }, 0);
  return {
    ...state,
    uncompleted: unCompleted,
  };
}

function reducer(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, (action as AddTodoAction).payload],
        uncompleted: state.uncompleted + 1,
      };
    case DELETE_TODO:
      return deleteTodo(state, (action as DeleteTodoAction).payload);
    case TOGGLE_TODO:
      return toggleTodo(state, (action as ToggleTodoAction).payload);
    case UPDATE_UNCOMPLETED:
      return updateUnCompleted(state);

    default:
      return state;
  }
}

export default reducer;
