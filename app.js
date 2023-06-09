var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors =require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var onboardRouter = require('./routes/onboard');
var jmlRouter = require('./routes/jml');
var registerRouter = require('./routes/register');
var joinerRouter = require('./routes/joiner');
var MoverFormRouter = require('./routes/MoverForm');
var offboardRouter = require('./routes/offboard');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/onboard', onboardRouter);
app.use('/jml', jmlRouter);
app.use('/register', registerRouter);
app.use('/joiner', joinerRouter);
app.use('/moverForm', MoverFormRouter);
app.use('/offboard', offboardRouter);
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
