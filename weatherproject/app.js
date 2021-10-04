const express = require("express");
const https = require("http");
require('dotenv').config()



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// fetch the data from the site(Body)
// body-parser

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let city = req.body.cityName; // to use this we need to fetch body data
  console.log(city);

  const query = city;
  const apiKey = process.env.API_KEY;
  const unit = "metric";
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit +
    "";
  https.get(url, (response) => {
    // console.log(response);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const feelLike = weatherData.main.feels_like;
      const descri = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      //   console.log(descri);
      res.write(`<h1>The temperature in ${city} is ${temp} °C. </h1>`);
      res.write(`<p>The weather is currently ${descri}</p><br>`);
      res.write(`<img src=${imageUrl} alt='icon1'>`);
      res.write(`<p>The weather is Feel Like ${feelLike}</p>`);
      res.send();
      // res.end();
    });
  });
});

app.listen(3331, () => console.log("listening on Port 3331"));
