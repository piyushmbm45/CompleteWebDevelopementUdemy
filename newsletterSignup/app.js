const express = require("express");
const http = require("http");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const fName = req.body.FirstName;
  const lName = req.body.LastName;
  const eMail = req.body.email;
  console.log(`${fName} ${lName} ${eMail}`);

  let data = {
    members: [
      {
        email_address: eMail,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);

  const url = "http://us6.api.mailchimp.com/3.0/lists/b6217979bf";
  const options = {
      method : "POST",
      auth: "piyushmbm:api_key"
  }

  const request = http.request(url, options, (response) => {
      response.on("data",(data)=>{
          console.log(JSON.parse(data));
      })
  });

  request.write(jsonData);
  request.end();
});

app.listen(3000, () => console.log("Listening On port 3000"));


