const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')


const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))


// mongoDb connection
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// schema for database
const articleSchema = {
    title: String,
    content: String
}
const Article = new mongoose.model('Article',articleSchema)

app.listen(3000,()=>{
    console.log("listening on 3000");
})