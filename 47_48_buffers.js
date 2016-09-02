var buffer = new Buffer('Hello', 'utf-8');

console.log(buffer);               // <Buffer 48 65 6c 6c 6f>
console.log(buffer.toString());    // Hello
console.log(buffer.toJSON());      // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(buffer[2]);            // 108

buffer.write('wo');
console.log(buffer.toString());    // wollo ('wo' overwrote 'he' because buffers are fixed size)

buffer = new ArrayBuffer(8);       // stores 8 bytes (64 bits) of raw binary data
var view = new Int32Array(buffer); // stores up to 2 32 bit ints
view[0] = 5;
view[1] = 29;
console.log(view);                 // Int32Array { '0': 5, '1': 29 }
view[2] = 89;                      // try and store a third number
console.log(view);                 // Int32Array { '0': 5, '1': 29 } fails to store a third number