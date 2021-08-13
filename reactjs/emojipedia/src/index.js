import React from "react";
import { render } from "react-dom";
import App from "./components/App";

render(
  <div>
    <div className="heading">
      <h1>EmojiPedia</h1>
    </div>
    <div className="app">
      <App />
    </div>
  </div>,
  document.getElementById("root")
);
