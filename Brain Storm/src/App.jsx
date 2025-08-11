import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GenreDropdown from "./components/GenreDropdown";
import Difficulty from "./components/Difficulty";
import StartButton from "./components/StartButton";
import GameArea from "./components/GameArea";

function App() {
  const [trivias, setTrivias] = React.useState({
    questions: [],
    options: [],
    answer: [],
  });
  const [isStarted, setIsStarted] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState("easy");
  const [genre, setGenre] = React.useState("GK");

  const handleGameStart = () => {
    setIsStarted(true);
    const container = document.querySelector(".container");
    document.querySelector("#startBtn").addEventListener("click", () => {
      container.classList.remove("start-initial");
      container.classList.add("start-active");
    });
  };

  React.useEffect(() => {
    if (!isStarted) {
      setTrivias({ questions: [], options: [], answers: [] });
    }
  }, [difficulty, genre, isStarted]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        className={`container ${isStarted ? "start-active" : "start-initial"}`}
      >
        <div className="choice-menu box box1">
          <GenreDropdown setGenre={setGenre} />
          <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
          <StartButton
            genre={genre}
            difficulty={difficulty}
            setTrivias={setTrivias}
            trivias={trivias}
            handleGameStart={handleGameStart}
          />
        </div>
        <section className="game-box box box2" id="gameBox">
          <GameArea trivias={trivias} />
        </section>
      </main>
    </>
  );
}

export default App;
