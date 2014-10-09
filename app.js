
// requires the necessary libraries
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//database requirements
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/retail_db');


// starts express
var app = express();

// requires the http libraryyy
var http = require('http');

// sets the variable for the server port
var port = process.env.PORT || 1217;

// make database accessible to our router
app.use(function(req, res, next){
  req.db = db;
  next();
});

// custom requires -- routes
var routes = require('./routes')(app);

// creates the server with the write head
http.createServer(function(req, res){
});


// tells the server to listen on the specified port
var server = app.listen(port, function(){
  console.log('listening on port %d', server.address().port);
});


// view engine setup
app.set('views', path.join(__dirname, '/app_server/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//NEW
//app.use('/', routes);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
