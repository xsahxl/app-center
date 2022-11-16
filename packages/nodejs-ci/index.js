// importing node framework
const express = require("express");

const app = express();

// Respond with "Hello World" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World");
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7001, () => {
  console.log("Server is running");
});

module.exports = app;
