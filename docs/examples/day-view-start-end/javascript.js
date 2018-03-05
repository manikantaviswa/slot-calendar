angular
  .module('mwl.calendar.docs')
  .controller('DayViewStartEndCtrl', function(abcMoment) {

    var vm = this;
    vm.events = [];
    vm.calendarView = 'day';
    vm.viewDate = abcMoment().startOf('month').toDate();

  });
