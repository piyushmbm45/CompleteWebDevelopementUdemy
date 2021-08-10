import React from "react"

const date = new Date();

let time = date.getHours();
        const customStyle = {
  color: "black"
}
let greetingwish;
if(time <12){
 greetingwish ="Good Morning";
  customStyle.color = "red"
}else if(time<18){
 greetingwish ="Good Afternoon";
  customStyle.color = "green"
}else{
 greetingwish = "Good Evening";
  customStyle.color = "blue"
}



function Greetingwish(){
    return(       
<h1 class="heading" style={customStyle}>{greetingwish}</h1>
    )
}

export default Greetingwish;