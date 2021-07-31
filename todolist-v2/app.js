const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// to use findByIDandRemove method of mongoose
mongoose.set("useFindAndModify", false);

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

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);

let foundItems = [];
app.get("/", (req, res) => {
  Item.find({}, (err1, foundItems) => {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Items successfully Inseted");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  });
});
// post route for inserting new item in a list
app.post("/", (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName},(err,foundList)=>{
      foundList.items.push(item);
      foundList.save();
      res.redirect(`/${listName}`)
    })
  }
});

app.post("/delete", (req, res) => {
  const checkedItem = req.body.checkbox;
  console.log(checkedItem);
  Item.findByIdAndRemove(checkedItem, (err) => {
    if (!err) {
      console.log("deleted");
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
});

app.get("/:id", (req, res) => {
  const customListName = req.params.id;

  List.findOne({ name: customListName }, (err, foundList) => {
    if (!err) {
      if (!foundList) {
        // create a new list
        const list = new List({
          name: customListName,
          items: defaultItems,
        });
        list.save();
        // one way to show list not hanging up after finding the lis
        // res.render("list", { listTitle: list.name, newListItems: list.items })
        // another way
        res.redirect(`/${customListName}`);
        console.log("Doesn't Exist");
      } else {
        // showing the existing list
        res.render("list", {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
        console.log("Exist");
      }
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));
