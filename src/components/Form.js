import React from "react";
import { v4 as uuidv4 } from "uuid";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

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
    setTodos([...todos, { text: inputText, isCompleted: false, id: uuidv4() }]);
    setInputText("");
  };

  const filterStatusHandler = (e) => {
    setFilterStatus(e);
  };

  const test = (e) => {
    e.preventDefault();
    console.log(todos);
    console.log(filterStatus);
  };

  return (
    <InputGroup className="form-container">
      <FormControl
        placeholder="Enter some task..."
        aria-label="Enter some task..."
        aria-describedby="basic-addon2"
        value={inputText}
        onChange={inputTextHandler}
        className="form-input"
      />

      <Button
        variant="primary"
        onClick={submitTodosHandler}
        type="submit"
        className="form-button"
      >
        <span>Add task</span>
      </Button>

      <DropdownButton
        as={InputGroup.Append}
        variant="info"
        title={filterStatus}
        id="input-group-dropdown-2"
        onSelect={filterStatusHandler}
        className="form-dropdown"
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
    </InputGroup>

    /**<form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        className="todo-input"
        type="text"
      />
      <button
        onClick={submitTodosHandler}
        className="todo-button"
        type="submit"
      >
        Dodaj
      </button>
      <select onChange={filterStatusHandler} name="filter">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
      <button onClick={test} className="todo-button" type="submit">
        test
      </button>
    </form>*/
  );
}

export default Form;
