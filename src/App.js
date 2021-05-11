import React, { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
//importing bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  }, []); //this useEffect runs only once because of empty array as dependancy

  useEffect(() => {
    switch (filterStatus) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
        break;
      default:
        setFilteredTodos(todos);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [filterStatus, todos]); //this useEffect runs once after render, and every time filterStatus or todos change

  return (
    <Container>
      <Row className="headingContainer">
        <Heading />
      </Row>
      <Row className="formContainer">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setFilterStatus={setFilterStatus}
          filterStatus={filterStatus}
        />
      </Row>
      {filteredTodos.length > 0 && (
        <Row className="todoListContainer">
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        </Row>
      )}
    </Container>
  );
}

export default App;
