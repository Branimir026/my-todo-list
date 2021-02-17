import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

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
    <div className="container">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setFilterStatus={setFilterStatus}
        filterStatus={filterStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
