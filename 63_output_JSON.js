var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  var obj = { firstName: 'Radu', lastName: 'Milici' };
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
  
}).listen(process.env.PORT); 