const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
});

app.listen(3000, () => console.log("Listening On port 3000"));
