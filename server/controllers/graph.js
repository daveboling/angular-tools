'use strict';

var htmlDir = 'public/views/';

exports.showPage = function(req, res){
  res.sendfile(htmlDir + 'graphs/graph.html');
};
