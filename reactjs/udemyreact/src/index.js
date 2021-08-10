import React from "react";
import { render } from "react-dom";
// import Heading from "./heading";
// import List from "./list";

import App from "./app"

// we are using html in js file this is done by react it compile html into js
// task 1
// render(
//   <div>
//     <h1>Hello World!</h1>
//     <p>This is Paragraph</p>
//   </div>,
//   document.getElementById("root")
// );

// task 2

// render(
//   <div>
//   <h1>My fav Chrome Ext</h1>
//     <ul>
//       <li>Ad Blocker</li>
//       <li>JSON pro</li>
//       <li>PIP</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// task 3
// inserting js into html ( means js into html into js)
// we can put any expression inside curly braces but not the statement
// const name = "Piyush";
// const lName = "Jain"
// const num = 4;
// render(
//   <div>
//     <h1>Hello {`${name} ${lName}`}</h1>
//     <p>Your Lucky Number is {Math.floor(Math.random()*10)}</p>
//   </div>,
//   document.getElementById("root")
// );

// task 3

// const date = new Date();

// const year = date.getFullYear();

// render(
//     <div>
//         <p>Created By Piyush Jain</p>
//         <p>Copyright {year}</p>
//     </div>,
//     document.getElementById("root")
// )

// task 3

// const img = "https://picsum.photos/200"

// render(
//   <div>
//     <h1 className="heading">My fav Chrome Ext</h1>
//     <div>
//         <img src={img} alt="img"/>
//     </div>
//   </div>,
//   document.getElementById("root")
// );

// task 4
// inline styling
// style accept values as object

// const customStyle = {
//     color: "red",
//     fontSize: "20px",
//     border: "2px solid black",
//     borderRadius: "20px",
//     padding: "20px",
//     textAlign: "center"
// }
// customStyle.fontSize = "30px"
// render(
//   <div>
//     <h1 style={customStyle}>Hello World!</h1>
//   </div>,
//   document.getElementById("root")
// );

//task 5
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// const date = new Date();

// let time = date.getHours();

// const customStyle = {
//   color: "black"
// }
// let greetingwish;
// if(time <12){
//  greetingwish ="Good Morning";
//   customStyle.color = "red"
// }else if(time<18){
//  greetingwish ="Good Afternoon";
//   customStyle.color = "green"
// }else{
//  greetingwish = "Good Evening";
//   customStyle.color = "blue"
// }

// render(
//   <h1 class="heading" style={customStyle}>{greetingwish}</h1>,
//   document.getElementById("root")
// )

// task 6
// -> React Component

// function Heading() {
//   return <h1>This is My heading</h1>;
// }

render(
  <App />,
  document.getElementById("root")
);
