import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState({
    name: "React",
    count: 0,
    version: "0.0.0",
  });

  const nameUpdate = () => {
    setCount((count) => ({ ...count, updateData: "React" }));
  };

  return (
    <>
      <button onClick={() => setCount((count) => ({ ...count, name: "vite" }))}>
        Click Version
      </button>
      <button
        onClick={() =>
          setCount((count) => ({ ...count, count: count.count + 1 }))
        }
      >
        Click Count
      </button>
      <button onClick={nameUpdate}>New Value</button>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) =>
          setCount((count) => ({ ...count, inputData: e.target.value }))
        }
      />
      <p>{count?.name}</p>
      <p>{count?.count}</p>
      <p>{count?.version}</p>
      <p>{count?.updateData}</p>
      <p>{count?.inputData}</p>
    </>
  );
}

export default App;
