import React from "react";

function Todo({ text, isCompleted, isCompletedHandler, isDeletedHandler }) {
  return (
    <li className={`todo-item ${isCompleted ? "completed" : ""}`}>
      <div>
        <span>{text}</span>
        <button onClick={isDeletedHandler}>Delete</button>
        <input
          defaultChecked={isCompleted}
          onChange={isCompletedHandler}
          type="checkbox"
        ></input>
      </div>
    </li>
  );
}

export default Todo;
