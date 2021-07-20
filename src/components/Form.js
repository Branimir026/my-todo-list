import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//importing bootstrap components
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";

function Form({ todos, setTodos, setFilterStatus, filterStatus }) {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputText !== "") {
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
    <InputGroup>
      <Col lg={10} xs={12}>
        <FormControl
          placeholder="Enter some task..."
          aria-label="Enter some task..."
          aria-describedby="basic-addon2"
          value={inputText}
          onChange={inputTextHandler}
          onKeyPress={handleKeyPress}
          className="formInput"
        />
      </Col>
      <Col lg={{ span: 2, offset: 0 }} xs={{ span: 6, offset: 3 }}>
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
