const mongoose = require("mongoose");

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();

function connctToMongo(uri, callback) {
    const {MongoClient} = require('mongodb');
    const connectionString = "mongodb+srv://segev:UUlWvz3c6vvorKgs@cluster0.vcfgm.mongodb.net/segevgram?retryWrites=true&w=majority";
    const client = new MongoClient(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connect(connectionString + '/usersdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });// view engine setup
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    })
    return db;
}

//connect to MongoDB
const db = connctToMongo();
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


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
