'use strict';

/**
 * @ngdoc function
 * @name newLazaroApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newLazaroApp
 */
angular.module('newLazaroApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
