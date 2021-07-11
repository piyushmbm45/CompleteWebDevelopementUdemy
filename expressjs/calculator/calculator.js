const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);
  let result = num1 + num2;
  res.send("The Answer is : "+ result);
});

app.listen(3030, () => console.log("listening on 3030"));
