'use strict';
var express     = require('express'),
    fs          = require('fs'),
    app         = express(),
    server      = require('http').createServer(app),
    validPaths  = ['/home', '/lesson1', '/lesson2'];

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: "ch0pSuey" }));

app.get('/', function (req, res) {
    res.redirect(validPaths[0]);
});

app.get(validPaths, function (req, res) {
    goToIndex(res);
});

app.use(express.static(__dirname + '/../frontend'));

var port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("listening on " + port);
});

function goToIndex(res) {
    res.send(fs.readFileSync(__dirname + '/../frontend/src/index.html').toString());
}