import "./App.css";
import Action from "./components/Action";
import Use from "./components/use";
import UseActionState from "./components/useActionState";
import UseOptimistic from "./components/useOptimistic";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  console.log("App render");

  return (
    <>
      {/* <Use />
      <Action />
      <UseActionState /> */}
      {/* <UseOptimistic /> */}
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Text text={text} />
    </>
  );
}

const Text = ({ text }) => {
  console.log("Text render");
  return <p>{text}</p>;
}

export default App;
