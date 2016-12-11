var express = require('express');
var bodyParser = require('body-parser');
// var ejsLayouts = require("express-ejs-layouts");
var session = require('express-session');
var passport = require('./config/ppConfig');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var db = require('./models');
var methodOverride = require('method-override');
require('dotenv').config();
var app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  // forces re-saving of the session, even if nothing has changed.
  resave: false,
  // stores the session, even if we haven't stored any values to it yet
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render("index")
});

app.use('/', require('./controllers/auth'));

// app.get('/articles', function(req, res) {
//   var results = []
//   db.article.findAll().then(function(articles) {
//     results.push(articles);
//     db.user.findOne({
//       where: { id: req.user.id }
//     }).then(function(user) {
//       results.push(user);
//       res.send(results);
//     });
//   });
// });

app.get('/articles', function(req, res) {
  var results = []
  db.article.findAll({
    include: [db.user]
  }).then(function(articles) {
    // console.log(articles[0]);
    results.push(articles);
    res.send(results);
    // db.user.findOne({
    //   where: { id: req.user.id }
    // }).then(function(user) {
    //   results.push(user);
    //   res.send(results);
    // });
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
