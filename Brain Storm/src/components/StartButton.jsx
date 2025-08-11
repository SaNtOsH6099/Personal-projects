/* eslint-disable no-control-regex */
import React from "react";
import "./StartButton.css";

const StartButton = ({
  difficulty,
  genre,
  setTrivias,
  trivias,
  handleGameStart,
}) => {
  const [loading, setLoading] = React.useState(false);
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  async function handleStart() {
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
            model: "llama3-70b-8192",
            messages: [
              {
                role: "system",
                content: `You are a quiz API. Respond ONLY with strictly valid JSON in this exact format, no extra text or code fences:

{
  "questions": [
    "What is the capital of France?",
    "Which element has the chemical symbol O?"
  ],
  "options": [
    ["Paris", "Berlin", "Madrid", "Rome"],
    ["Gold", "Oxygen", "Silver", "Iron"]
  ],
  "answers": [
    "Paris",
    "Oxygen"
  ]
}
  Difficulty levels mean:
- Easy: Basic facts or common knowledge, straightforward questions like for students in class 5th or below.
- Medium: Requires reasoning or moderate understanding beyond basics  like for students in class 10th or below.
- Hard: Expert-level questions that involve complex knowledge or problem-solving like for student above 10th standard.



Generate exactly 5 multiple-choice questions based on the user's genre and strictly follow the difficulty criteria. Each question must have exactly 4 options and one correct answer. No explanations or other text.`,
              },
              {
                role: "user",
                content: `Generate 5 multiple-choice "${genre}" questions, follow "${difficulty}" difficulty. 
Each question must have exactly 4 options and one correct answer. 
Avoid repeating topics from the previous output: ${JSON.stringify(trivias)}.
Random seed: ${Date.now()}`,
              },
            ],
            temperature: 1.5,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      let jsonString = data.choices[0].message.content.trim();

      // Remove Markdown code fences if present
      jsonString = jsonString.replace(/``````/gi, "").trim();

      // Replace bad escaped single quote (\' → ') and other possible control characters
      jsonString = jsonString.replace(/\\'/g, "'");

      // Remove any control characters except for tab, newline, carriage return

      jsonString = jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, (c) =>
        /[\n\r\t]/.test(c) ? c : ""
      );

      let triviaObj;
      try {
        triviaObj = JSON.parse(jsonString);
      } catch (parseError) {
        console.error("Failed to parse JSON from model:", parseError);
        console.log("Raw model output:", jsonString);
        return;
      }

      setTrivias(triviaObj);
    } catch (error) {
      console.error("Error fetching trivia:", error);
    } finally {
      setLoading(false);
    }

    handleGameStart();
  }

  return (
    <div className="start-btn-container">
      <button
        className="start-btn"
        id="startBtn"
        onClick={handleStart}
        disabled={loading}
      >
        {loading ? "Loading..." : "Start"}
      </button>
    </div>
  );
};

export default StartButton;
