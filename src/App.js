import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🍇": "grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato"
};

export default function App() {
  var emojisWeKnow = Object.keys(emojiDictionary);
  var [emojiInterpreter, setEmojiInterpreter] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setEmojiInterpreter(emojiDictionary[userInput]);
    } else {
      setEmojiInterpreter("Not in our Database");
    }
  }

  function clickEventHandler(item) {
    setEmojiInterpreter(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1 style={{ padding: "1rem " }}>Welcome to Food Emojis Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <div style={{ padding: "1rem" }}>
        {" "}
        <span style={{ fontSize: "xx-large" }}>
          Meaning : {emojiInterpreter}{" "}
        </span>
      </div>

      <div style={{ padding: "1rem" }}>
        Emojis We Know :
        {emojisWeKnow.map((item) => {
          return (
            <span
              onClick={() => clickEventHandler(item)}
              key={item}
              style={{
                padding: "0.5rem",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
