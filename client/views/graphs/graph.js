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
    zillow.getDemographics().then(function(res){
      $scope.json = JSON.parse(res.data.neighborhood);
      console.log($scope.json);
    });
  }]);

})();

