var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){ //no need to write head, express does it
  res.send('<html><head><title>hello</title></head><body><h1>hello world!!!</h1><body></html>');
});

app.get('/api', function(req, res){ //no need to write head, express does it
  res.json({ name: 'radu', age: 27 });
});

app.listen(port);