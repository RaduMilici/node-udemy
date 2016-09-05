module.exports = function(app){
  
  app.get('/api/person/:id', function(req, res){
    // get data from db
    res.json({ name: 'radu', age: 27 });
  });
  
  app.post('/api/person', function(req, res){
    // save to db
  });
  
  app.delete('/api/person/:id', function(req, res){
    // delete from db
  });
  
};