var cors = require('cors');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);
var mongoSanitize = require('express-mongo-sanitize');

var indexRouter = require('./routes/index');
var entryRouter = require('./routes/entry');
var userRouter = require('./routes/user');
var apiRouter = require('./routes/api').router;

var app = express();

// view engine setup
var handlebars = require('express-handlebars').create({
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  defaultLayout: 'layout',
  extname: 'hbs'
});
app.engine('hbs', handlebars.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json()); // for parsing POST requests
app.use(express.urlencoded({ extended: false }));
app.use(mongoSanitize({ // remove mongo special characters from request body
  replaceWith: '_'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // serve static files
app.use(session({ // for tracking logins
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    url: 'mongodb://localhost:3001/users'
  })
}));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/user', userRouter);
app.use('/entry', entryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
