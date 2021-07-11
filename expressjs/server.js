const express = require('express')

const app = express();


// route - 1  (Home Route)
app.get("/",(req,res)=>{
    res.send('<h1>Hello world</h1>');    // sending html syntax
})

// route - 2
app.get("/contact",(req,res)=>{
    res.send("Contact Me")
})

// route - 3
app.get("/about", (req,res)=>{
    res.send("About Me!")
})

app.listen(3000,()=> console.log("Hello World") )