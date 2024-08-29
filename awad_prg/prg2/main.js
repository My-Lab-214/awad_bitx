var express = require("express");
var app = express();

app.get("/now", (req, res) => {
  res.json({ time: new Date().toString() });
});

app.listen(process.env.PORT || 3012, () => {
  console.log("Server is running on port " + (process.env.PORT || 3012));
});
