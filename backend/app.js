var express = require('express');
var app = express();
var hotel_route = require('./hotel');

app.get('/', function (req, res) {
  console.log(req.query.category);
  console.log(req.query.budget);
  console.log(req.query.numPeople);
  console.log(req.query.location);

  res.send('Hello World!');
});

app.use('/hotel', hotel_route);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
 });

//routing, web service, each will call a function inside e.g. hotel.js