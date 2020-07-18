var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registrationRouter = require('./routes/registration')
var loginRouter = require('./routes/login')
var eventRouter = require('./routes/events')
var bodyParser = require('body-parser');
var app = express();


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/events', {useNewUrlParser: true});

app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registration', registrationRouter);
app.use('/login',loginRouter );
app.use('/event',eventRouter );
module.exports = app;
