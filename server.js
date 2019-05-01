var express = require('express');
var app = express();
require('dotenv').config()

var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/burger_controllers");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
