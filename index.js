var express = require('express');
var bodyParser = require('body-parser');
// var ejsLayouts = require("express-ejs-layouts");
var db = require('./models');
var methodOverride = require('method-override');
// require('dotenv').config();
var app = express();

// var flash = require('connect-flash');
// var passport = require('./config/ppConfig');
// var isLoggedIn = require('./middleware/isLoggedIn');
// var session = require('express-session');




app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   // forces re-saving of the session, even if nothing has changed.
//   resave: false,
//   // stores the session, even if we haven't stored any values to it yet
//   saveUninitialized: true
// }));
// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(function(req, res, next) {
//   // before every route, attach the flash messages and current user to res.locals
//   res.locals.alerts = req.flash();
//   res.locals.currentUser = req.user;
//   next();
// });

// app.use(ejsLayouts);

app.get('/', function(req, res) {
  // console.log(req.user);
  res.render("index")
});

// app.use('/', require('./controllers/auth'));

app.get('/articles', function(req, res) {
  db.article.findAll().then(function(articles) {
    res.send(articles);
  });
});

app.post('/articles', function(req, res) {
  var userName;
  if (req.body.userName) {
    userName = req.body.userName;
  } else {
    userName = 'Anonymous';
  }
  db.article.create({
    title: req.body.title,
    content: req.body.content,
    userName: req.body.userName,
    avatarUrl: 'https://image.freepik.com/free-icon/astronaut_318-136948.jpg'
  }).then(function(data) {
    res.send(data);
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
        console.log('did you get sent???');
        console.log('see here for likes', results[0]);
        res.send(results);
      });
    });
  });
});

var server = app.listen(process.env.PORT || 3000);
