import React from "react";
import Card from "./card";
import ContactArray from "../contact.js";
import Avatar from "./avatar";

function createCard(ele) {
  return (
    <Card
      name={ele.name}
      img={ele.imgURL}
      tel={ele.phone}
      email={ele.email}
    />
  );
}

function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>
      <Avatar img="https://upload.wikimedia.org/wikipedia/commons/7/70/Lilli_Iliev%2C_Portrait.jpg" />
      {ContactArray.map(createCard)}
    </div>
  );
}

export default App;
