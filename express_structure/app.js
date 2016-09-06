var express = require('express');
var app = express();
var mysql = require('mysql');
var port = process.env.PORT || 3000;
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

// middleware
app.use('/assets', express.static(__dirname + '/public'));

//template engine
app.set('view engine', 'ejs');

var connection = mysql.createConnection({
  host: 'node-udemy.cloz5p1gecpe.eu-central-1.rds.amazonaws.com',
  port: '3306',
  ssl: 'Amazon RDS',
  database: 'innodb',
  user: 'radu',
  password: '12345678'
});
  
connection.query('SELECT * FROM people', function(error, result){
  if(error)
    throw error;
    
  apiController(app);
  htmlController(app, result);
  
  app.listen(port);
});


