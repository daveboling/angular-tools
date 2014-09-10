(function(){
  'use strict';

  var tabs = angular.module('tabs', []);

  /* Dave Notes

  1. This controller is easily reusable almost anywhere in the website.
  Example would be to make a few templates with controllers pre-build in
  and use those templates elsewhere very effortlessly.

  2.



  */

  //TAB CONTROLLER
  tabs.controller('TabController', ['$scope', function($scope){
    $scope.tab = 1;

    $scope.setTab = function(num){
      $scope.tab = num;
    };

    //this is for the ng-class directive for setting
    //the .active class of Bootstrap to whatever tab
    //is currently active
    $scope.isSelected = function(num){
      return $scope.tab === num;
    };

  }]);

})();
