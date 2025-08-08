import React from "react";
import "./input.css";

const Input = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = React.useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    } else {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      <h1 className="hero-title">To Do: </h1>
      <form onSubmit={handleFormSubmit}>
        <input
          className="to-do-input"
          type="text"
          value={inputValue}
          placeholder="Enter your task"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btnSubmit">
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
