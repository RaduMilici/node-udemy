var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mysql = require('mysql');

// middleware
app.use('/assets', express.static(__dirname + '/public'));

//template engine
app.set('view engine', 'ejs');

// routes
app.get('/', function(req, res){ 
  
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
      
    console.log(result); /*[RowDataPacket { name: 'radu', age: 27 },
                            RowDataPacket { name: 'alex', age: 30 },
                            RowDataPacket { name: 'sergiu', age: 20 },
                            RowDataPacket { name: 'dana', age: 15 },
                            RowDataPacket { name: 'ciolos', age: 60 }]*/
  });
  
  res.render('index');
});

app.listen(port);