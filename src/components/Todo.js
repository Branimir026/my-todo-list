import React from "react";
//importing bootstrap components
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Todo({ text, isCompleted, isCompletedHandler, isDeletedHandler }) {
  return (
    <Row className="todoContainer">
      <Col lg={9} xs={12}>
        <Alert
          variant="dark"
          className={`todoItem ${isCompleted ? "completed" : ""}`}
        >
          {text}
        </Alert>
      </Col>
      <Col lg={1} xs={3} className="checkboxDiv">
        <ToggleButton
          type="checkbox"
          variant="success"
          checked={isCompleted}
          value="check"
          onChange={isCompletedHandler}
          className="todoCheckbox"
        />
      </Col>
      <Col lg={{ span: 2, offset: 0 }} xs={{ span: 4, offset: 5 }}>
        <Button
          variant="danger"
          onClick={isDeletedHandler}
          className="todoDelete"
        >
          Delete
        </Button>
      </Col>
    </Row>
  );
}

export default Todo;
