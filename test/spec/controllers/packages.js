'use strict';

describe('Controller: PackagesCtrl', function () {

  // load the controller's module
  beforeEach(module('newLazaroApp'));

  var PackagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PackagesCtrl = $controller('PackagesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
