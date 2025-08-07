import React from "react";
import "./InputIngredients.css";

const InputIngredients = ({ setIngredients }) => {
  const [input, setInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() === "") return;
    setIngredients((prev) => [...prev, input.trim()]);
    setInput("");
  }

  return (
    <>
      <h2 className="hero-title">Enter ingredients to generate a recipe</h2>
      <form className="ingredient-form" onSubmit={handleSubmit}>
        <input
          className="add-ingredient-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-ingredient-btn">+ Add Ingredient</button>
      </form>
    </>
  );
};

export default InputIngredients;
