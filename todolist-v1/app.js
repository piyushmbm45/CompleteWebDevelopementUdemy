const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
    let day = "";
  if (today.getDay() === 0) {
    day = "Sunday";
  } else if(today.getDay() === 1) {
    day = "Monday";

  } else if (today.getDay() === 2){
    day = "Tuesday";

  } else if (today.getDay() === 3){
    day = "Wednesday";

  }else if (today.getDay() === 4){
    day = "Thursday";

  } else if (today.getDay() === 5){
    day = "Friday";

  } else{
    day = "Saturday";
  }

  
res.render("list",{kindOfDay : day});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
