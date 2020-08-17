import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={(e) => completeTodo(index)}>Complete</button>
        <button onClick={(e) => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
