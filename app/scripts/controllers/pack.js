'use strict';

/**
 * @ngdoc function
 * @name newLazaroApp.controller:PackctrlCtrl
 * @description
 * # PackctrlCtrl
 * Controller of the newLazaroApp
 */
angular.module('newLazaroApp')
  .controller('PackCtrl', function ($scope,$routeParams,Deals,$http) {
     	$scope.packRoute = $routeParams.dealId;

     	$http.get('http://159.203.107.182:3000/api/deals/').success(function(data){
   			$scope.pack = data.filter(function(entry){
   				return entry._id === $scope.packRoute;
   			})[0];
   		});
  });
