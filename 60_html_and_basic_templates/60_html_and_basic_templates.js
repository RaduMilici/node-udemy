var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  
  var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
  var message = "Hello world";
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  html = html.replace('{Message}', message);
  res.end(html);
  
}).listen(process.env.PORT); 