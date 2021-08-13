import React from "react";

function Card(props) {
  return (
    <div className="container">
      <span>{props.emoji}</span>
      <h2>{props.name}</h2>
      <p>{props.meaning}</p>
    </div>
  );
}

export default Card;
