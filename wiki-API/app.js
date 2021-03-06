const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// mongoDb connection
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// schema for database
const articleSchema = {
  title: String,
  content: String,
};
const Article = new mongoose.model("Article", articleSchema);

app
  .route("/articles")
  .get((req, res) => {
    Article.find({}, (err, foundArticles) => {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err) => {
      if (!err) {
        res.send("Successfully send the new article");
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Article.deleteMany({}, (err) => {
      if (!err) {
        res.send("all articles are successfull deleted");
      } else {
        res.send(err);
      }
    });
  });

////////////////////// handling specific article

app
  .route("/articles/:articleTitle")
  .get((req, res) => {
    Article.find({ title: req.params.articleTitle }, (err, foundArticle) => {
      if (!err) {
        res.send(foundArticle);
      } else {
        res.send(err);
      }
    });
  })
  .put((req, res) => {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      (err) => {
        if (!err) {
          res.send("Success");
        } else {
          res.send(err);
        }
      }
    );
  })
  .patch((req, res) => {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      (err) => {
        if (!err) {
          res.send("Success");
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
      if (!err) {
        res.send("Succes");
      } else {
        res.send(err);
      }
    });
  });

app.listen(3000, () => {
  console.log("listening on 3000");
});
