import React from "react";
import "./Difficulty.css";

const Difficulty = ({ difficulty, setDifficulty }) => {
  return (
    <>
      <div className="difficulty">
        <h2 className="header2">Choose a Difficulty: </h2>

        <div className="choose">
          <label>
            <input
              type="radio"
              name="diff"
              value="easy"
              className="rad-btn"
              checked={difficulty === "easy"}
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <span className="easy">Easy</span>
          </label>

          <label>
            <input
              type="radio"
              name="diff"
              value="medium"
              className="rad-btn"
              checked={difficulty === "medium"}
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <span className="medium">Medium</span>
          </label>

          <label>
            <input
              type="radio"
              name="diff"
              value="hard"
              className="rad-btn"
              checked={difficulty === "hard"}
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <span className="hard">Hard</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Difficulty;
