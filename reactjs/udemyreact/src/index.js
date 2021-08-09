import React from "react";
import { render } from "react-dom";

// we are using html in js file this is done by react it compile html into js
render(
  <div>
    <h1>Hello World!</h1>
    <p>This is Paragraph</p>
  </div>,
  document.getElementById("root")
);
