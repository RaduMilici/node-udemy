var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // pipe the read file to res, this is faster than read first and send it all after
  fs.createReadStream(__dirname + '/index.htm', 'utf8').pipe(res);
  
}).listen(process.env.PORT); 