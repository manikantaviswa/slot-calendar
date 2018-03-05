'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .factory('calendarTitle', function(abcMoment, calendarConfig, calendarHelper) {

    function day(viewDate) {
      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.day);
    }

    function week(viewDate) {
      return calendarConfig.titleFormats.week
        .replace('{week}', abcMoment(viewDate).isoWeek())
        .replace('{year}', abcMoment(viewDate).startOf('isoweek').format('YYYY'));
    }

    function month(viewDate) {
      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.month);
    }

    function year(viewDate) {
      return calendarHelper.formatDate(viewDate, calendarConfig.titleFormats.year);
    }

    return {
      day: day,
      week: week,
      month: month,
      year: year
    };

  });
