'use strict';

//static html directory
var htmlDir = 'public/views/';

//res.render is used for a templating engine, res.sendfile is used for static files
exports.showPage = function(req, res){
  res.sendfile(htmlDir + 'tabs/tabs.html');
};