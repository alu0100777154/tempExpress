// server.js
// load the things we need
var express = require('express');
var app = express();
var path = require('path');
var temperatura = require("./temperature.js");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs');

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'index'); // defaults to 'layout'  '


// Serve static files
app.use(express.static('.'));
app.use(expressLayouts);

app.set('port', (process.env.PORT || 8080)); 

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('index');
});

// about page 
//app.get('/about', function(req, res) {
//    res.render('pages/about');
//});

app.post('/', function(req, res){
  var inicial = new temperatura();
  inicial.inicializar(req.body.ini_temp);

  var resultado = inicial.convert();
   res.render('res', {resultado: resultado, title: 'res'});
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
