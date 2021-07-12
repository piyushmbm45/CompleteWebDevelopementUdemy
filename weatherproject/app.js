const { response } = require("express");
const express = require("express");
const https = require("http");

const app = express();

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=London&appid=99a6930370afa07740f1c344aad5b588&units=metric";
  https.get(url, (response) => {
    // console.log(response);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const feelLike = weatherData.main.feels_like;
      const descri = weatherData.weather[0].description;
      //   console.log(descri);
      res.write(`<h1>The temperature in London is ${temp} °C. </h1>`);
      res.write(`<p>The weather is currently ${descri}</p><br>`);
      res.write(`<p>The weather is Feel Like ${feelLike}</p>`);
      res.send();
      // res.end();
    });
  });
});

app.listen(3000, () => console.log("listening on Port 3000"));
