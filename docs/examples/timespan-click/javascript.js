angular
  .module('mwl.calendar.docs')
  .controller('TimespanClickCtrl', function(abcMoment) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'month';
    vm.viewDate = abcMoment().startOf('month').toDate();

    vm.timespanClicked = function(date) {
      vm.lastDateClicked = date;
    };

  });
