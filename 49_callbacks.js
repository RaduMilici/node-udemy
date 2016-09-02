function greet(callback){
  console.log('Hello!');
  var data = { name: 'Radu' };
  callback(data);
}

greet(function(data){
  console.log('Callback was invoked.');
  console.log(data);
});

greet(function(data){
  console.log('Another callback was invoked.');
  console.log(data.name);
});