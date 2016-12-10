var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require("express-ejs-layouts");
var session = require('express-session');
var db = require('./models');
var methodOverride = require('method-override');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(ejsLayouts);

app.get("/", function(req, res) {
  res.render("index")
});

var server = app.listen(process.env.PORT || 3000);
