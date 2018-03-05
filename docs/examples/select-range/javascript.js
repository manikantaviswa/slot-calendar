angular
  .module('mwl.calendar.docs')
  .controller('SelectRangeCtrl', function(abcMoment) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'day';
    vm.viewDate = abcMoment().startOf('month').toDate();

    vm.rangeSelected = function(startDate, endDate) {
      vm.firstDateClicked = startDate;
      vm.lastDateClicked = endDate;
    };

  });
