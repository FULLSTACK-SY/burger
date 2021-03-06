var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);


// Start our server so that it can begin listening to client requests.
app.listen(port, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + port);
});
