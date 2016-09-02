var fs = require('fs');
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf-8');

console.log(greet); // Hello world!

var greet = fs.readFile(__dirname + '/greet.txt', 'utf-8', 
function(error, data){
  console.log(data + ' done async');
});

console.log('This will print second, because this is run while V8 reads greet.txt');