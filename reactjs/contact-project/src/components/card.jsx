import React from "react";

function Card(props) {
  return (
    <div className="container">
      <div className="top">
        <h2>{props.name}</h2>
        <img src={props.img} alt="img" />
      </div>
      <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
