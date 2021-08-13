import React from "react";
import Card from "./card";
import emojiArray from "../emojipedia";

function createCard(ele) {
  return <Card emoji={ele.emoji} name={ele.name} meaning={ele.meaning} />;
}

function App() {
  return emojiArray.map(createCard);
}

export default App;
