import React from "react";
import { v4 as uuidv4 } from "uuid";
//importing bootstrap components
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setFilterStatus,
  filterStatus,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodosHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, isCompleted: false, id: uuidv4() },
      ]);
      setInputText("");
    }
  };

  const filterStatusHandler = (e) => {
    setFilterStatus(e);
  };

  return (
    <InputGroup className="formContainer">
      <Col lg={{ span: 8, offset: 1 }} xs={12}>
        <FormControl
          placeholder="Enter some task..."
          aria-label="Enter some task..."
          aria-describedby="basic-addon2"
          value={inputText}
          onChange={inputTextHandler}
          className="formInput"
        />
      </Col>
      <Col lg={1} xs={4}>
        <Button
          variant="primary"
          onClick={submitTodosHandler}
          type="submit"
          className="formButton"
        >
          <span>Add</span>
        </Button>
      </Col>
      <Col lg={{ span: 2, offset: 0 }} xs={{ span: 6, offset: 2 }}>
        <DropdownButton
          as={InputGroup.Append}
          variant="info"
          title={filterStatus}
          id="input-group-dropdown-2"
          onSelect={filterStatusHandler}
          className="formDropdown"
        >
          <Dropdown.Item eventKey="All">
            <span>All</span>
          </Dropdown.Item>
          <Dropdown.Item eventKey="Completed">
            <span>Completed</span>
          </Dropdown.Item>
          <Dropdown.Item eventKey="Uncompleted">
            <span>Uncompleted</span>
          </Dropdown.Item>
        </DropdownButton>
      </Col>
    </InputGroup>
  );
}

export default Form;
