angular
  .module('mwl.calendar.docs')
  .controller('CellModifierCtrl', function(abcMoment) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'month';
    vm.viewDate = abcMoment().startOf('month').toDate();

    vm.cellModifier = function(cell) {
      console.log(cell);
      if (cell.label % 2 === 1 && cell.inMonth) {
        cell.cssClass = 'odd-cell';
      }
      cell.label = '-' + cell.label + '-';
    };

  });
