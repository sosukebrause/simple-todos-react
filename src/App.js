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
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
