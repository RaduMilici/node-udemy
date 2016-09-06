var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  var rootObj = { firstName: 'Radu', lastName: 'Milici', location: 'root' };
  var dataObj = { firstName: 'Radu', lastName: 'Milici', location: 'data' };
  
  if(req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(rootObj, null, 2));
  }
  else if (req.url === '/data'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(dataObj, null, 2));
  }
  else {
    res.writeHead(404);
    res.end();
  }
  
}).listen(process.env.PORT); 