import React from "react";
import GenerateFile from "./GenerateFile";
import "./list.css";

const List = ({ todos, setTodos }) => {
  const listItems = todos.map((todo, key) => (
    <li className="list-item" key={key}>
      <span className="numbering">{key + 1}</span>
      <span className="todo-name">{todo}</span>
      <span className="check-box">
        <input type="checkbox" />
      </span>
    </li>
  ));

  const removeLastTask = () => {
    setTodos((prev) => prev.slice(0, -1));
  };
  return (
    <>
      {todos.length > 0 && (
        <>
          <ol className="list">{listItems}</ol>
          <button className="btn-remove" onClick={removeLastTask}>
            Remove last task
          </button>
        </>
      )}
      {todos.length > 4 && <GenerateFile />}
    </>
  );
};

export default List;
