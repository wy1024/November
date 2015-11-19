var request = require("request");
var express = require("express");
var http = require("http");
var https = require("https");

var app = express();

var serverPort = 3000;
var serverIP = "127.0.0.1";

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    console.log("app.use");
    next();
});

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    console.log("all");
    next();
});

// Route for everything else.
app.get('/get503', function(req, res){
     //res.sendStatus(503); // (503, 'I\'m busyyyy');
    console.log("get503");
    res.status(503).send("oops I'm busy. Status code 503");
});


app.listen(serverPort, serverIP, function() {
    console.log("Listening on port " + serverPort);
});
