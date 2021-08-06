const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')


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

const userSchema = {
    email: String,
    password: String
}

const User =  new mongoose.model("User",userSchema);


app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/login',(req,res)=>{
    res.render("login")
})

app.get('/register',(req,res)=>{
    res.render("register")
})

app.post("/register",(req,res)=>{
    const emailIn = req.body.username;
    const passwordIn = req.body.password;

    const newUser = new User({
        email : emailIn,
        password : passwordIn
    })
    
    newUser.save((err)=>{
        if(!err){
            res.render('secrets')
        }
        else{
            console.log(err);
        }
    })
})


app.listen(3000, () => {
    console.log("listening on 3000");
  });