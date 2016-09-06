var bodyParser = require('body-parser'); // express middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app, dbResult){
  
  app.get('/', function(req, res){
    res.render('index');
  });
  
  app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id, age: req.query.age });
  });
  
  app.post('/person', urlencodedParser, function(req, res){
    res.json(req.body);
  });
  
  app.get('/angular', function(req, res){
    res.render('angular', { serverPeople: dbResult });
  });
  
  
};