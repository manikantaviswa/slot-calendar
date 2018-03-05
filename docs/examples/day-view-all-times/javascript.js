angular
  .module('mwl.calendar.docs')
  .controller('DayViewAllTimesCtrl', function($scope, abcMoment, calendarConfig) {

    var vm = this;
    vm.events = [];
    vm.calendarView = 'day';
    vm.viewDate = abcMoment().startOf('month').toDate();
    var originalFormat = calendarConfig.dateFormats.hour;
    calendarConfig.dateFormats.hour = 'HH:mm';

    $scope.$on('$destroy', function() {
      calendarConfig.dateFormats.hour = originalFormat; // reset for other demos
    });

  });
