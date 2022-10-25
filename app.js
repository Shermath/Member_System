const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("User hit the page, Express working");
  res.send("Home Page!");
});

app.listen(5000, () => {
  console.log("Server listoning from port 5000....");
});
