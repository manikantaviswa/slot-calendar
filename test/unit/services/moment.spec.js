'use strict';

var angular = require('angular');
var momentLib = require('moment');
beforeEach(angular.mock.module('mwl.calendar'));

describe('abcMoment', function() {

  it('should be the window moment object', inject(function(abcMoment) {

    expect(abcMoment).to.eql(momentLib);

  }));

});
