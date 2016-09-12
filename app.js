var express = require('express');
var app = express();
var lib = require('./index.js');
var bodyParser = require('body-parser')

app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.raw());
/**
 * Routes start
 */
app.get('/', function (request, response) {
  response.send("ok");
});

app.post('/getPlaceToEat', function(request, response) {
  console.log(request.body);
  lib.getPlaceToEat(request.body, response);
});

/*
 * Routes end
 */

/**
 * Setup server
 */
var server = app.listen(3000, function () {
  console.log('Starting Discuss! ');
});
