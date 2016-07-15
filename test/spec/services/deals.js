'use strict';

describe('Service: deals', function () {

  // load the service's module
  beforeEach(module('newLazaroApp'));

  // instantiate service
  var deals;
  beforeEach(inject(function (_deals_) {
    deals = _deals_;
  }));

  it('should do something', function () {
    expect(!!deals).toBe(true);
  });

});
