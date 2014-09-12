
'use strict';

var htmlDir = 'public/views/',
    request = require('request'),
    parser  = require('xml2json');

exports.showPage = function(req, res){
  res.sendfile(htmlDir + 'graphs/graph.html');
};

exports.graph = function(req, res){
  var zillowKey = 'X1-ZWz1b3uumkl157_46au6',
            url = 'http://www.zillow.com/webservice/GetDemographics.htm?zws-id='+ zillowKey +'&state=TN&city=Nashville&neighborhood=Hendersonville';
  request(url, function(error, response, data){
    data = parser.toJson(data);
    res.send({neighborhood: data});
  });
};
