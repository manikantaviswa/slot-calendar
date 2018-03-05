angular
  .module('mwl.calendar.docs')
  .controller('ViewChangeClickCtrl', function(abcMoment) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'year';
    vm.viewDate = abcMoment().startOf('month').toDate();
    vm.viewChangeEnabled = true;

    vm.viewChangeClicked = function(date, nextView) {
      console.log(date, nextView);
      return vm.viewChangeEnabled;
    };

  });
