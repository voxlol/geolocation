// Google API Key - API_KEY
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

// Middle-ware
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on port 3000')
});
