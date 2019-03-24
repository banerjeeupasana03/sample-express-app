var express = require('express');
var cons = require('consolidate');
var path = require('path');
var app = express();

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/levels', function(req, res, next) {
  res.render('levels');
});

app.use('/', function(req, res, next) {
  res.render('index');
});

module.exports = app;
