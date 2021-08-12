import React from "react";
import Card from "./card";
import ContactArray from "../contact.js";
import Avatar from "./avatar";

function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>
      <Avatar img="https://upload.wikimedia.org/wikipedia/commons/7/70/Lilli_Iliev%2C_Portrait.jpg" />
      <Card
        name={ContactArray[0].name}
        img={ContactArray[0].imgURL}
        tel={ContactArray[0].phone}
        email={ContactArray[0].email}
      />
      <Card
        name={ContactArray[1].name}
        img={ContactArray[1].imgURL}
        tel={ContactArray[1].phone}
        email={ContactArray[1].email}
      />
      <Card
        name={ContactArray[2].name}
        img={ContactArray[2].imgURL}
        tel={ContactArray[2].phone}
        email={ContactArray[2].email}
      />
    </div>
  );
}

export default App;
