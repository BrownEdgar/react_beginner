import React from "react";
import { useState } from "react";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState("");

  const handleAppTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setinput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div className="todo__container">
        <h1>To-Do List</h1>
        <form action="#" onSubmit={handleAppTodo}>
          <input
            type="text"
            placeholder="Add a task"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul className="todo__list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <span>{todo.text}</span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
