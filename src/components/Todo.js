import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import Alert from "react-bootstrap/Alert";

function Todo({ text, isCompleted, isCompletedHandler, isDeletedHandler }) {
  return (
    <ListGroup.Item>
      <div className="todo-container">
        <Alert
          variant="dark"
          className={`todo-item ${isCompleted ? "completed" : ""}`}
        >
          {text}
        </Alert>
        <ToggleButton
          type="checkbox"
          variant="success"
          checked={isCompleted}
          value="check"
          onChange={isCompletedHandler}
          className="todo-checkbox"
        />
        <Button
          variant="danger"
          onClick={isDeletedHandler}
          className="todo-delete"
        >
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default Todo;
