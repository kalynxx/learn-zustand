import { useState } from "react";
import zustandLogo from "./assets/zustand.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <a href="https://github.com/pmndrs/zustand" target="_blank">
          <img src={zustandLogo} className="logo react" alt="React logo" />
        </a>
      <h1>Learning Zustand</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        </p>
      </div>
    </>
  );
}

export default App;
