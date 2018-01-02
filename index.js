var express = require('express');
var path = require('path');
var homeControllers = require('./controllers/homeControllers.js');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(homeControllers);

app.listen(3000, function(){
  console.log('App is listening on port 3000.....');
});
