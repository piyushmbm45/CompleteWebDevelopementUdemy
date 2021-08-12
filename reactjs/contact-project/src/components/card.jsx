import React from "react";
import Avatar from "./avatar";


function Card(props) {
  return (
    <div className="container">
      <div className="top">
        <h2>{props.name}</h2>
        <Avatar img={props.img}/>
      </div>
      <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
