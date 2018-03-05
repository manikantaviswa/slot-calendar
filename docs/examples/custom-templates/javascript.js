angular
  .module('mwl.calendar.docs')
  .controller('CustomTemplatesCtrl', function($scope, abcMoment) {

    var vm = this;
    vm.events = [];
    vm.calendarView = 'month';
    vm.viewDate = abcMoment().startOf('month').toDate();
    vm.cellModifier = function(cell) {
        cell.cssClass = 'custom-template-cell';      
    };
  });
