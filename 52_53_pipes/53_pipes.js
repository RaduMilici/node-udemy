var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');
var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzip = zlib.createGzip();         // a stream that compresses chunks as soon as it gets them

readable.pipe(writable);              // reads and pipes to writable
readable.pipe(gzip).pipe(compressed); // reads, pipes to 'gzip' (which zips), then pipes that to 'compressed'