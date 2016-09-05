var bodyParser = require('body-parser'); // express middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
  
  app.get('/', function(req, res){
    res.render('index');
  });
  
  app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id, age: req.query.age });
  });
  
  app.post('/person', urlencodedParser, function(req, res){
    res.send('Thank you!');
  });
  
};