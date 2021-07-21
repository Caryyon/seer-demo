import React from "react";
import "./App.css";
import SeerButton from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SeerButton icon="refresh" large>
          Test
        </SeerButton>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
