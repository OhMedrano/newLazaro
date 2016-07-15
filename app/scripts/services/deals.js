'use strict';

/**
 * @ngdoc service
 * @name newLazaroApp.deals
 * @description
 * # deals
 * Service in the newLazaroApp.
 */
angular.module('newLazaroApp')
    .service('Deals', function ($resource,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('http://159.203.107.182:3000/api/deals',{
        query:{
        		method:'GET',
        		params:{dealId:'deals'},
        		isArray:true
        	}
      });
   


 });
