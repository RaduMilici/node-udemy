var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// middleware
app.use('/assets', express.static(__dirname + '/public'));

//template engine
app.set('view engine', 'ejs');

// routes
app.get('/', function(req, res){ 
  res.render('index');
});

app.get('/person/:id', function(req, res){
  res.render('person', { ID: req.params.id });
});

app.listen(port);