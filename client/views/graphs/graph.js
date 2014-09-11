/*global X2JS */
/* jshint camelcase:false */
(function(){
  'use strict';

  //Angular module definition
  var graph = angular.module('graph', ['ngRoute']);



  //ROUTES------
  //------------
  graph.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/avgHomePrice', {templateUrl: '/views/graphs/avgHomePrice.html', controller: 'GraphCtrl'})
    .otherwise({redirectTo: '/avgHomePrice'});
  }]);


  //CONTROLLERS--------
  //-------------------
  //-------------------


  //graph.html/jade
  graph.controller('GraphCtrl', ['$scope', 'zillow', function($scope, zillow){
    $scope.title = 'Zillow Chart Avg. Home Price';
    zillow.getDemographics().success(function(data){
      debugger;
      var x2js = new X2JS(),
      json = x2js.xml_str2json(data);
      console.log(json);
      return json;
    });
  }]);

})();

