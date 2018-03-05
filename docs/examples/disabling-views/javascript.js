angular
  .module('mwl.calendar.docs')
  .controller('DisableViewsCtrl', function(abcMoment) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'year';
    vm.viewDate = abcMoment().startOf('month').toDate();

    vm.viewChangeClicked = function(nextView) {
      if (nextView === 'month') {
        return false;
      }
    };

  });
