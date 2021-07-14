const express = require("express");
const ejs = require("ejs");
const { addListener } = require("nodemon");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
    let day = "";
  if (today.getDay() === 6 || today.getDay() === 0) {
    day = "Weekand";
  } else {
    day = "Weekday";
  }
res.render("list",{kindOfDay : day});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
