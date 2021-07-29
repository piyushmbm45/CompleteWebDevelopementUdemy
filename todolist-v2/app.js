const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set("view engine", "ejs");

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome To Your todolist.",
});
const item2 = new Item({
  name: "Hit the + Button to add a new Item.",
});
const item3 = new Item({
  name: "<-- Hit This to delete an item.",
});

const defaultItems = [item1, item2, item3];

// Item.insertMany(defaultItems,(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Items successfully Inseted");
//   }
// });

app.get("/", (req, res) => {
  
  Item.find({}, (err, foundItems) => {
    if (err) {
      console.log(err);
    } else {
   res.render("list", { listTitle: "Today", newListItems: foundItems });
      console.log(foundItems);
    }
  });

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

app.get("/about", (req, res) => {
  res.render("about");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
