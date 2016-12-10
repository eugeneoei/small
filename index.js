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

app.get('/', function(req, res) {
  res.render("index")
});

app.get('/articles', function(req, res) {
  var results = []
  db.article.findAll().then(function(articles) {
    results.push(articles);
    db.user.findOne({
      where: { id: req.user.id }
    }).then(function(user) {
      results.push(user);
      res.send(results);
    });
  });
});

app.get('/articles/:id', function(req,res) {
  var results = [];
  db.article.findOne({
    where: { id: req.params.id },
  }).then(function(article) {
    article.getArticleLikes().then(function(articleLikes) {
      results.push(articleLikes);
      article.getComments().then(function(comments) {
        results.push(comments);
        res.send(results);
      });
    });
  });
});

var server = app.listen(process.env.PORT || 3000);
