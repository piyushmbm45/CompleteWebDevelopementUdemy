const express = require("express");
const ejs = require("ejs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
var data = "";
app.get("/", (req, res) => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    // year: "numeric",
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItem: data });
});

app.post("/", (req, res) => {
  data = req.body.newItem;
  res.redirect("/");
  console.log(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
