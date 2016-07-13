'use strict';

/**
 * @ngdoc function
 * @name newLazaroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newLazaroApp
 */
angular.module('newLazaroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
