const express = require('express')

const app = express();


app.get('/',(req,res)=>{
    // res.send('Hello World its Express js');  // sending normal string
    res.send('<h1>Hello world</h1>');    // sending html syntax
})



app.listen(3000,()=> console.log("Hello World") )