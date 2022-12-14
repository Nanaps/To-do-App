import "./App.css";
import { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [showText, setShowText] = useState([]);

  const clickAddToDo = () => {
    const newToDo = [...showText, textInput];
    setShowText(newToDo);
    setTextInput("");
  };

  const messageInput = (even) => {
    setTextInput(even.target.value);
  };
  console.log("hello");
  return (
    <div className="App">
      <h1>TO DO App🤩</h1>
      <label forhtml="">What are you doing? </label>
      <input
        type="text"
        placeholder="Enter your message"
        onChange={messageInput}
        value={textInput}
      />
      <button onClick={clickAddToDo}>ADD</button>
      {showText.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}

export default App;
