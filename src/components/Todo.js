import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function Todo({ text, isCompleted, isCompletedHandler, isDeletedHandler }) {
  return (
    <ListGroup.Item>
      <div>
        <span className={`todo-item ${isCompleted ? "completed" : ""}`}>
          {text}
        </span>
        <button onClick={isDeletedHandler}>Delete</button>
        <input
          defaultChecked={isCompleted}
          onChange={isCompletedHandler}
          type="checkbox"
        ></input>
      </div>
    </ListGroup.Item>
  );
}

export default Todo;
