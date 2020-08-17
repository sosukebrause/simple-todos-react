import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/Form";

function App() {
  const [todos, setTodos] = useState([
    {
      text: `Learn about react hooks`,
      isCompleted: false,
    },
    {
      text: `Learn about react array loops`,
      isCompleted: false,
    },
    {
      text: `Learn about react webpacks`,
      isCompleted: false,
    },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
  };

  return (
    <div className="app">
      <div className="todoList">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
