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

var http = require('http')
var port = process.env.PORT || 3000
var server = http.Server(app)
var io = require('socket.io')(server)


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

// get all articles
app.get('/articles', function(req, res) {
  db.article.findAll({
    order: [['createdAt', 'DESC']]
  }).then(function(articles) {
    // console.log('see here for articles', articles);
    // console.log('see here for type of', typeof(articles[0]));
    res.send(articles);
  });
});

// create new article
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
    userName: userName,
    avatarUrl: 'https://image.freepik.com/free-icon/astronaut_318-136948.jpg'
  }).then(function(data) {
    // console.log(typeof(data));
    // console.log('see here for new data', data);
    res.send(data);
  });
});

// get one article
app.get('/articles/:id', function(req,res) {
  var results = [];
  db.article.findOne({
    where: { id: req.params.id },
  }).then(function(article) {
    article.getArticleLikes().then(function(articlelikes) {
      results.push(articlelikes);
      article.getComments().then(function(comments) {
        results.push(comments);
        res.send(results);
        // console.log('see here for article>>>>>', article.articleLikes.length);
      });
    });
  });
});

// create comment according to article
app.post('/articles/:id/comments', function(req,res) {
  var userName;
  if (req.body.userName) {
    userName = req.body.userName;
  } else {
    userName = 'Anonymous';
  }
  db.article.findOne({
    where: { id: req.params.id },
  }).then(function(article) {
    article.createComment({
      content: req.body.content,
      userName: userName
    }).then(function(comment) {
      res.send(comment);
    });
  });
});

// socket
io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  // receive new comment
  socket.on('new comment', function(data, articleId) {
    console.log(data.userName, "says:", data.content);
    console.log(articleId);
    // broadcast to everyone except the user who created comment
    socket.broadcast.emit('new comment', data, articleId);
  });

  // receive new article
  socket.on('new article', function(data) {
    // broadcast to everyone execept user who created article
    socket.broadcast.emit('new article', data);
  });


}); // socket end

server.listen(port, () => {
  console.log('Server listening on port: ', server.address().port)
});
// var server = app.listen(process.env.PORT || 3000);
