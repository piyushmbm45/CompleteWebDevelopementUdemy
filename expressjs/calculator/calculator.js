const express = require("express")
const app = express();


app.get("/",(req,res)=>{
res.send("Hello world")
})

app.listen(3030,()=> console.log("listening on 3030"))