import React from "react";
import { v4 as uuidv4 } from "uuid";

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
    setFilterStatus(e.target.value);
  };

  const test = (e) => {
    e.preventDefault();
    console.log(todos);
    console.log(filterStatus);
  };

  return (
    <form>
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
    </form>
  );
}

export default Form;
