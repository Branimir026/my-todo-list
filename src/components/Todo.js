import React from "react";

function Todo({ text, isCompleted, isCompletedHandler }) {
  return (
    <li className={`todo-item ${isCompleted ? "completed" : ""}`}>
      <div>
        <span>{text}</span>
        <button>Delete</button>
        <input
          value={isCompleted}
          onChange={isCompletedHandler}
          type="checkbox"
        ></input>
      </div>
    </li>
  );
}

export default Todo;
