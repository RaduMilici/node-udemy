var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// middleware
app.use('/assets', express.static(__dirname + '/public'));

// custom middleware
// Not passing a route as the first param will cause EVERY request to use this 
// middleware, no matter the route.
app.use('/', function(req, res, next){ 
  console.log('Request url ' + req.url);
  // 'next()' calls the next middleware, in this case the app.get('/') below.
  // Commenting it will cause the page to hang because express won't know where
  // to route '/'
  next(); 
});

// routes
app.get('/', function(req, res){ 
  res.send(`
  <html>
    <head>
      <link rel=stylesheet type=text/css href=assets/style.css>
    </head>
    <body>
      <h1>hello world!</h1>
    <body>
  </html>`
  );
});

app.get('/person/:name/:age', function(req, res){ // 'name' and 'age' could be anything
  
  res.send(`
  <html>
    <head>
      <link rel=stylesheet type=text/css href=/assets/style.css> 
    </head>
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