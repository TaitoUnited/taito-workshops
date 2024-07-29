import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ state: "initial", data: null });

  useEffect(() => {
    setData({ state: "loading", data: null });
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData({ state: "success", data }))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData({ state: "error", data: null });
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}

export default App;
