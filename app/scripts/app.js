'use strict';

/**
 * @ngdoc overview
 * @name newLazaroApp
 * @description
 * # newLazaroApp
 *
 * Main module of the application.
 */
angular
  .module('newLazaroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/packages', {
        templateUrl: 'views/packages.html',
        controller: 'PackagesCtrl'
      })
      .when('/pack/:dealId', {
        templateUrl: 'views/pack.html',
        controller: 'PackCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
