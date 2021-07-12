const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
});

app.post("/",(req,res)=>{
    const fName = req.body.FirstName;
    const lName = req.body.LastName;
    const eMail = req.body.email;
    console.log(`${fName} ${lName} ${eMail}`);
})

app.listen(3000, () => console.log("Listening On port 3000"));
