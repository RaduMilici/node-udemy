var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

// middleware
app.use('/assets', express.static(__dirname + '/public'));

//template engine
app.set('view engine', 'ejs');

apiController(app);
htmlController(app);

app.listen(port);