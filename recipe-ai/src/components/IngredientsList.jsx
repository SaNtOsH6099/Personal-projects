import "./ingredientsList.css";

const IngredientsList = ({ ingredients, setIngredients }) => {
  const ingredientItems = ingredients.map((ingredient, index) => (
    <li key={index} className="ingredient-item list-item">
      {ingredient} ✔
    </li>
  ));

  function handleRemoveLast() {
    setIngredients((prev) => prev.slice(0, -1));
  }

  return (
    <>
      <ul className="ingredients-list">
        <h2>Ingredients:</h2>
        {ingredientItems.length > 0 ? (
          ingredientItems
        ) : (
          <li className="no-ingredients list-item">
            No ingredients added yet.
          </li>
        )}

        {ingredients.length > 0 ? (
          <button className="remove-btn" onClick={handleRemoveLast}>
            Remove last ingredient
          </button>
        ) : null}
      </ul>
    </>
  );
};

export default IngredientsList;
