angular
  .module('mwl.calendar.docs')
  .controller('DayViewStartEndCtrl', function(abcMoment) {

    var vm = this;
    vm.events = [];
    vm.calendarView = 'day';
    vm.viewDate = abcMoment().startOf('month').toDate();

    // note that this class is required to set the hour part height in the css
    vm.cellModifier = function(cell) {
      cell.cssClass = 'my-custom-class';
    }

  });
