// Requires ExpressJs Framework
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// Include Route Files
const contentRoutes = require("./src/routes/ContentRoutes");
const projectRoutes = require("./src/routes/ProjectRoutes");
const costumerRoutes = require("./src/routes/CustomerRoutes");

// Express Framework
const app = express();
var path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start Listening Port
var port = "8097";
var server = app.listen(port, function () {
  console.log("Server is running ...");
  console.log(process.env);
  console.log("API KEY Değeri", process.env.API_KEY);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", contentRoutes, projectRoutes, costumerRoutes);

// Catch the broken links
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + "not found" });
});
