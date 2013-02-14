var express = require('express'),
    exampleApp = require('./example/app');

var app = module.exports = express();

app.set('view engine', 'jade');

app.use('/example', exampleApp);
app.use(app.router);

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  console.log('gist 4950831 listnening on port 3000');
});
