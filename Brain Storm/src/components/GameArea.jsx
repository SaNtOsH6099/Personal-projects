import React from "react";

import "./GameArea.css";

function GameArea({ trivias }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [gameFinished, setGameFinished] = React.useState(false);
  const [choosen, setChoosen] = React.useState([]);

  React.useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setGameFinished(false);
    setChoosen([]);
  }, [trivias]);

  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
  };
  const handleNextQuestion = () => {
    setChoosen((prev) => [...prev, selectedAnswer]);

    if (selectedAnswer === trivias.answers[currentQuestionIndex]) {
      setScore((prev) => prev + 1);
    }
    setSelectedAnswer("");

    if (currentQuestionIndex < trivias.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameFinished(true);
    }
  };

  if (gameFinished) {
    return (
      <div className="result-box">
        <h1>
          Your Score is {score} of {trivias.questions.length}
        </h1>
        <div className="results">
          <section className="correct-answers">
            <h2 className="correct-title correct"> Correct Answers </h2>
            <ol className="correct-list">
              {trivias.answers.map((answer, index) => (
                <li className="correct-list-items" key={index}>
                  {answer}
                </li>
              ))}
            </ol>
          </section>

          <section className="choosen-answers">
            <h2 className="correct-title  ans"> Answered: </h2>
            <ol className="correct-list">
              {choosen.map((answer, index) =>
                trivias.answers[index] === answer ? (
                  <li className="correct-list-items green" key={index}>
                    {answer}
                  </li>
                ) : (
                  <li className="correct-list-items red" key={index}>
                    {answer}
                  </li>
                )
              )}
            </ol>
          </section>
        </div>
      </div>
    );
  }
  return (
    <div className="question-container">
      <h1 className="question-counter">
        Question {currentQuestionIndex + 1} of {trivias.questions.length}
      </h1>
      <p className="question">{trivias.questions[currentQuestionIndex]}</p>

      <div className="options-container">
        {trivias.options[currentQuestionIndex]?.map((option, index) => (
          <label key={index} className="opt">
            <input
              name="answer"
              type="radio"
              value={option}
              onChange={handleOptionChange}
              checked={selectedAnswer === option}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <button
        className="next-btn game-btn"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        {currentQuestionIndex < trivias.questions.length - 1
          ? "Next"
          : "Finish"}
      </button>
    </div>
  );
}

export default GameArea;
