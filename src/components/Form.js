import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form( {inputText, setInputText, todos, setTodos}) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodosHandler = (e) => {
        e.preventDefault();
        setTodos([
          ...todos, {text: inputText, isCompleted: false, id: uuidv4() }
        ]);
        setInputText("");
    }

    const test = (e) => {
      e.preventDefault();
      console.log(todos);
  }

  return (
    <form>
        <input value={inputText} onChange={inputTextHandler} className="todo-input" type="text" />
        <button onClick={submitTodosHandler} className="todo-button" type="submit">Dodaj</button>
        <button onClick={test} className="todo-button" type="submit">test</button>
    </form>
  );
}

export default Form;