'use strict';

describe('Controller: PackctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('newLazaroApp'));

  var PackctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PackctrlCtrl = $controller('PackctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
