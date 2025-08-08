import React from "react";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState(["one", "two", "three"]);
  console.log(todos);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Input todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;
