(function(){
  'use strict';

  angular.module('graph')
  .factory('zillow', ['$http', function($http){

    function getDemographics(){
      return $http.get('/ndata');
    }


    return {getDemographics: getDemographics};
  }]);

})();

