'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .controller('MwlCalendarDayCtrl', function($scope, abcMoment, calendarHelper, calendarEventTitle) {

    var vm = this;

    vm.calendarEventTitle = calendarEventTitle;

    function refreshView() {

      vm.timeHidden = vm.dayViewTimePosition === 'hidden';
      vm.dayViewTimePositionOffset = vm.dayViewTimePosition !== 'default' ? 0 : 60;

      vm.dayViewSplit = vm.dayViewSplit || 30;
      vm.dayViewHeight = calendarHelper.getDayViewHeight(
        vm.dayViewStart,
        vm.dayViewEnd,
        vm.dayViewSplit,
        vm.dayViewSegmentSize
      );

      var view = calendarHelper.getDayView(
        vm.events,
        vm.viewDate,
        vm.dayViewStart,
        vm.dayViewEnd,
        vm.dayViewSplit,
        vm.dayViewEventWidth,
        vm.dayViewSegmentSize
      );

      vm.allDayEvents = view.allDayEvents;
      vm.nonAllDayEvents = view.events;
      vm.viewWidth = view.width + 62;

    }

    $scope.$on('calendar.refreshView', refreshView);

    $scope.$watchGroup([
      'vm.dayViewStart',
      'vm.dayViewEnd',
      'vm.dayViewSplit'
    ], refreshView);

    vm.eventDragComplete = function(event, minuteChunksMoved) {
      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
      var newStart = abcMoment(event.startsAt).add(minutesDiff, 'minutes');
      var newEnd = abcMoment(event.endsAt).add(minutesDiff, 'minutes');
      delete event.tempStartsAt;

      vm.onEventTimesChanged({
        calendarEvent: event,
        calendarNewEventStart: newStart.toDate(),
        calendarNewEventEnd: event.endsAt ? newEnd.toDate() : null
      });
    };

    vm.eventDragged = function(event, minuteChunksMoved) {
      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
      event.tempStartsAt = abcMoment(event.startsAt).add(minutesDiff, 'minutes').toDate();
    };

    vm.eventResizeComplete = function(event, edge, minuteChunksMoved) {
      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
      var start = abcMoment(event.startsAt);
      var end = abcMoment(event.endsAt);
      if (edge === 'start') {
        start.add(minutesDiff, 'minutes');
      } else {
        end.add(minutesDiff, 'minutes');
      }
      delete event.tempStartsAt;

      vm.onEventTimesChanged({
        calendarEvent: event,
        calendarNewEventStart: start.toDate(),
        calendarNewEventEnd: end.toDate()
      });
    };

    vm.eventResized = function(event, edge, minuteChunksMoved) {
      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
      if (edge === 'start') {
        event.tempStartsAt = abcMoment(event.startsAt).add(minutesDiff, 'minutes').toDate();
      }
    };

  })
  .directive('mwlCalendarDay', function() {

    return {
      template: '<div mwl-dynamic-directive-template name="calendarDayView" overrides="vm.customTemplateUrls"></div>',
      restrict: 'E',
      require: '^mwlCalendar',
      scope: {
        events: '=',
        viewDate: '=',
        onEventClick: '=',
        onEventTimesChanged: '=',
        onTimespanClick: '=',
        onDateRangeSelect: '=',
        dayViewStart: '=',
        dayViewEnd: '=',
        dayViewSplit: '=',
        dayViewEventChunkSize: '=',
        dayViewSegmentSize: '=',
        dayViewEventWidth: '=',
        customTemplateUrls: '=?',
        cellModifier: '=',
        templateScope: '=',
        dayViewTimePosition: '=',
        draggableAutoScroll: '='
      },
      controller: 'MwlCalendarDayCtrl as vm',
      bindToController: true
    };

  });
