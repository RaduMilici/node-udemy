var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){ 
  res.send('<html><head><title>hello</title></head><body><h1>hello world!</h1><body></html>');
});

app.get('/person/:name/:age', function(req, res){ // 'name' and 'age' could be anything
  res.send(`
  <html>
    <head></head>
    <body>
      <h1>Person: ${req.params.name}</h1>
      <h1>Age: ${req.params.age}</h1>
    <body>
  </html>`
  );
});

app.get('/api', function(req, res){ 
  res.json({ name: 'radu', age: 27 });
});

app.listen(port);