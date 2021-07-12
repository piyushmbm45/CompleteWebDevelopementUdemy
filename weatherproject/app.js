const { response } = require("express");
const express = require("express");
const https = require("http");

const app = express();

app.get("/", (req, res) => {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=London&appid=99a6930370afa07740f1c344aad5b588&units=metric";
  https.get(url, (response) => {
    // console.log(response);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const feelLike = weatherData.main.feels_like;
      const descri = weatherData.weather[0].description;
      console.log(descri);
    });
  });

  res.send("Server is up and running");
});

app.listen(3000, () => console.log("listening on Port 3000"));
