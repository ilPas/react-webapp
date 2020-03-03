import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Figlio from "./Figlio";
import Fratello from "./Fratello";
import Sorella from "./Sorella";
import FiglioStock from "./FiglioStock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Figlio />
        <Fratello />
        <Sorella />
        <FiglioStock nome="Pas" eta="indefinita" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
