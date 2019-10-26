var express = require('express');
var app = express();
require('dotenv').config()

//Declare port variable.  Will either be port 8080 or will be the port provided if connecting through heroku
var PORT = process.env.PORT || 8080;

//Declare express handlebars.
var exphbs = require("express-handlebars");

//Handlebars boilerplate.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Express boilerplate
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Defines the routes path.
var routes = require("./controllers/burger_controllers");

app.use(routes);

//Tell the app to listen on the appropriate PORT
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
