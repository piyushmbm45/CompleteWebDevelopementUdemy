const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");








app.get("/", (req, res) => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    // year: "numeric",
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    newItem.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: newItem });
});

app.get("/about",(req,res)=>{
  res.render("about")
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
