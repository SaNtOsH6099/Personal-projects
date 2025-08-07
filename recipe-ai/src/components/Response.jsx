import React from "react";
import "./response.css";
import parseRecipe, { cleanMarkdown } from "./parseRecipe";

const Response = ({ recipe, setRecipe, ingredients, loading, setLoading }) => {
  const { title, recipeIngredients, steps, tips } = parseRecipe(recipe);

  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  async function getRecipe() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful chef who returns recipes in a structured format with:title name ,Ingredients,Steps ,tips.",
              },
              {
                role: "user",
                content: `Generate a recipe using the following ingredients in a clean structured format : ${ingredients}`,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      setRecipe(data.choices[0].message.content); // Save recipe
    } catch (err) {
      console.error(err);
      setRecipe("Something went wrong! Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <>
      {ingredients.length > 2 && (
        <button className="get-recipe-btn" onClick={getRecipe}>
          {loading ? "Generating..." : "Generate Recipe"}
        </button>
      )}

      {recipe && (
        <div className="response-container">
          {!loading && (title || recipeIngredients || steps || tips) && (
            <div className="recipe-box">
              {title && <h2 className="recipe-title">{title}</h2>}

              {recipeIngredients && recipeIngredients.length > 0 && (
                <>
                  <h3>Ingredients</h3>
                  <ul className="recipe-list">
                    {recipeIngredients.map((item, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{
                          __html: cleanMarkdown(item),
                        }}
                      />
                    ))}
                  </ul>
                </>
              )}

              {steps && steps.length > 0 && (
                <>
                  <h3>Steps</h3>
                  <ol className="recipe-list">
                    {steps.map((step, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{
                          __html: cleanMarkdown(step),
                        }}
                      />
                    ))}
                  </ol>
                </>
              )}

              {tips && tips.length > 0 && (
                <>
                  <h3>Tips</h3>
                  <ul className="recipe-list">
                    {tips.map((tip, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: cleanMarkdown(tip) }}
                      />
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Response;
