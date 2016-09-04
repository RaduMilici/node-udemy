var fs = require('fs');
var readable = fs.createReadStream(__dirname + '/greet.txt', 
  { //options object
    encoding: 'utf8', 
    highWaterMark: 1024 // = 1 kylobyte (how big we want each chunk to be in bytes)
  });
var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');

readable.on('data', function(chunk){
  writable.write('\n------1024 bytes of text data------\n' + chunk); // will write to 'greetCopy.txt' every 1kb of read data
});