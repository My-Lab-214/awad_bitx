var express = require("express");
var app = express();

app.get("/angular/echo", (req, res) => {
  res.json({ echo: "angular" });
});

app.listen(process.env.PORT || 3013, () => {
  console.log("Server is running on port " + (process.env.PORT || 3013));
});
