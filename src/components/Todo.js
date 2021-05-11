import React from "react";
//importing bootstrap components
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import { ListGroupItem } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

function Todo({ text, isCompleted, isCompletedHandler, isDeletedHandler }) {
  return (
    <ListGroupItem>
      <Col lg={10} xs={12}>
        <Alert
          variant="dark"
          className={`todoItem ${isCompleted ? "completed" : ""}`}
        >
          {text}
        </Alert>
      </Col>
      <Col
        lg={{ span: 1, offset: 0 }}
        xs={{ span: 3, offset: 3 }}
        className="checkboxDiv"
      >
        <ToggleButton
          type="checkbox"
          variant="success"
          checked={isCompleted}
          value="check"
          onChange={isCompletedHandler}
          className="todoCheckbox"
        />
      </Col>
      <Col lg={{ span: 1, offset: 0 }} xs={{ span: 3, offset: 0 }}>
        <Button
          variant="danger"
          onClick={isDeletedHandler}
          className="todoDelete"
        >
          <Trash />
        </Button>
      </Col>
    </ListGroupItem>
  );
}

export default Todo;
