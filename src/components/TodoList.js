import React from "react";
import Todo from "./Todo";
import ListGroup from "react-bootstrap/ListGroup";

function TodoList({ todos, setTodos, filteredTodos }) {
  const isCompletedHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  };

  const isDeletedHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ListGroup className="todo-list-container">
      {filteredTodos.map((todo) => (
        <Todo
          text={todo.text}
          key={todo.id}
          isCompleted={todo.isCompleted}
          isCompletedHandler={() => isCompletedHandler(todo.id)}
          isDeletedHandler={() => isDeletedHandler(todo.id)}
        />
      ))}
      {/*</ul>*/}
    </ListGroup>
  );
}

export default TodoList;
