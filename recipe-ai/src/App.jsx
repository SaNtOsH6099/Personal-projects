import React from "react";
import Header from "./components/Header.jsx";
import InputIngredients from "./components/InputIngredients.jsx";
import IngredientsList from "./components/IngredientsList.jsx";
import Response from "./components/Response.jsx";

import "./App.css";
const App = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  console.log("recipe:", recipe);

  return (
    <div className="app-container">
      <header className="header">
        <Header />
      </header>

      <main className="main">
        <div className="input">
          <InputIngredients setIngredients={setIngredients} />
        </div>

        <div className="ingredients-display">
          <IngredientsList
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </div>

        <div className="response">
          <Response
            recipe={recipe}
            setRecipe={setRecipe}
            ingredients={ingredients}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
