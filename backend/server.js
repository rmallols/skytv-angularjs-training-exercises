'use strict';
var express = require('express'),
    fs = require('fs'),
    app = express(),
    server = require('http').createServer(app),
    validPaths = ['/home', '/lesson1', '/lesson2', '/lesson3', '/lesson4'];

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: "ch0pSuey" }));

app.get('/', function (req, res) {
    res.redirect(validPaths[0]);
});

app.get(validPaths, function (req, res) {
    goToIndex(res);
});

app.get('/rest/users', function (req, res) {
    if (req.query.role === 'admin') {
        res.send(403, 'You don\'t have permissions to retrieve admin users');
    } else {
        res.send([
            {_id: 'id0', firstName: 'Peter', lastName: 'Jackson', dateOfBirth: '31-10-1961'},
            {_id: 'id1', firstName: 'James', lastName: 'Cameron', dateOfBirth: '16-08-1954'},
            {_id: 'id2', firstName: 'Steven', lastName: 'Spielberg', dateOfBirth: '18-12-1946'}
        ]);
    }
});

app.use(express.static(__dirname + '/../frontend'));

var port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log("listening on " + port);
});

function goToIndex(res) {
    res.send(fs.readFileSync(__dirname + '/../frontend/src/index.html').toString());
}