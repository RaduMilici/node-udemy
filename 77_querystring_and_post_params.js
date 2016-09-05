var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser'); // express middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json(); 

// middleware
app.use('/assets', express.static(__dirname + '/public'));

//template engine
app.set('view engine', 'ejs');

// routes
app.get('/', function(req, res){ 
  res.render('index');
});

app.get('/person/:id', function(req, res){
  res.render('person', { ID: req.params.id, qstr: req.query.qstr });
});

// 'urlencodedParser' param is middleware called before callback
// if 'urlencodedParser' is removed, no longer attaches 'body' property to req
app.post('/person', urlencodedParser, function(req, res){ 
  res.send('You posted name: ' + req.body.name + " and age: " + req.body.age);
  console.log(req.query.name);
  console.log(req.body.age);
});

// same as above, but with JSON data
app.post('/personjson', jsonParser, function(req, res){ 
  res.send('You posted name: ' + req.body.name + " and age: " + req.body.age);
  console.log(req.body.name);
  console.log(req.body.age);
});

app.listen(port);