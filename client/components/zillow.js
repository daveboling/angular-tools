(function(){
  'use strict';

  angular.module('graph')
  .factory('zillow', ['$http', function($http){

    //in the future, this will need address, zip, city and state
    //it will return an example lat and lng as well as information
    //from Zillow

    var zillowKey = 'X1-ZWz1dwl3kfvdhn_2ca3z';

    function getDemographics(){
      var url = 'http://www.zillow.com/webservice/GetDemographics.htm?zws-id='+ zillowKey +'&state=TN&city=Nashville&neighborhood=Hendersonville&callback=cb';
      return $http.get(url);
    }


    return {getDemographics: getDemographics};
  }]);

})();

