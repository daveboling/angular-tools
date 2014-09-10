'use strict';

var port    = process.env.PORT,
    express = require('express'),
    morgan  = require('morgan'),
    app     = express();

//middleware setup
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));

//config for rendering files
//currently not in use
//app.set('views', __dirname + '/../publc/views/');

//controller imports
var tabs = require('./controllers/tabs');

app.get('/views/tabs/', tabs.showPage);


//server listen
app.listen(port);

