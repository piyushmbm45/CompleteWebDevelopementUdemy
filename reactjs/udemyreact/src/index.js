import React from "react";
import { render } from "react-dom";

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

const name = "Piyush Jain"
render(
    <h1>
        Hello {name}
    </h1>,
    document.getElementById("root")
)