var express = require("express");
//var fs = require('fs');
var bodyParser = require('body-parser');
var path = require("path");

var PORT = process.env.PORT || 8030;

var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

var app = express();

app.use(express.static(__dirname + "/app/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


apiRoutes(app);
htmlRoutes(app)



app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });



//module.exports = path;