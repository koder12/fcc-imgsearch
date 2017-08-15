var tungus = require('tungus');
var mongoose = require('mongoose');
var express = require('express');
var api = require('./api/index');
var app = express();

mongoose.connect('tingodb://'+__dirname+'/db');

app.use('/api', api);

app.get('/', function(req, res){
  res.json({msg: 'Welcome to Image Search Abstraction Layer'});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('Node.js listening on port ' + port);
});