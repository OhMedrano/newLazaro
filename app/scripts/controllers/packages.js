'use strict';

/**
 * @ngdoc function
 * @name newLazaroApp.controller:PackagesCtrl
 * @description
 * # PackagesCtrl
 * Controller of the newLazaroApp
 */
angular.module('newLazaroApp')
  .controller('PackagesCtrl', function ($scope,$routeParams,$location,Deals) {
    	
    		$scope.packages = Deals.query({dealId:$routeParams.dealId});
    		$scope.packLocations = ['Manhattan','Queens','Brooklyn','Bronx','Staten Island'];
  });
