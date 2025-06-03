import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center gap-8 my-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-center mb-6">Vite + React</h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and
          save to test HMR
        </p>
      </div>

      <p className="mt-8 text-center text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
