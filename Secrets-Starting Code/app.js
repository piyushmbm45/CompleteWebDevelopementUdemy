require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// express session
app.use(
  session({
    secret: "The Time Is 5:44 PM",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

////////mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// below 3 line of code deprcation warning
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/secrets",(req,res)=>{
  if(req.isAuthenticated()){
    res.render("secrets")
  }
  else{
    res.redirect('/login')
  }
})

app.post("/register", (req, res) => {

  User.register({ username: req.body.username },req.body.password,(err,user)=>{
    if(err){
      console.log(err);
      res.redirect('/register')
    }
    else{
      passport.authenticate('local')(req,res,()=>{
        res.redirect('/secrets')
      })
    }
  });

});

app.post("/login", (req, res) => {
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
