var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 中间键 解析post请求参数
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());

app.use(indexRouter);
app.use(usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
