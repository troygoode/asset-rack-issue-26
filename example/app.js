var express = require('express'),
    rack = require('asset-rack');

var assets = new rack.Rack([
  new rack.StylusAsset({
    url: '/css/app.css',
    filename: __dirname + '/public/css/app.styl'
  })
]);

var app = module.exports = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(assets);
app.use(app.router);

app.get('/', function(req, res){
  res.render('index');
});
