import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
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

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            isCompleted={todo.isCompleted}
            isCompletedHandler={() => isCompletedHandler(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
