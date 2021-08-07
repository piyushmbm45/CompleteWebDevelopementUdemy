require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

////////mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const emailIn = req.body.username;
  const passwordIn = req.body.password;
  bcrypt.hash(passwordIn, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    const newUser = new User({
      email: emailIn,
      password: hash,
    });
    newUser.save((err) => {
      if (!err) {
        res.render("secrets");
      } else {
        console.log(err);
      }
    });
  });
});

app.post("/login", (req, res) => {
  const emailIn = req.body.username;
  const passwordIn = req.body.password;

  User.findOne({ email: emailIn }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        bcrypt.compare(passwordIn, foundUser.password, function (err, result) {
          // result == true
          if (result === true) {
            res.render("secrets");
          }
        });
      }
    }
  });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
