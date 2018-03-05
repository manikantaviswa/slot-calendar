angular
  .module('mwl.calendar.docs')
  .controller('CustomEventClassCtrl', function(abcMoment, calendarConfig) {

    var vm = this;

    vm.events = [
      {
        title: 'Has custom class',
        color: calendarConfig.colorTypes.warning,
        startsAt: abcMoment().startOf('month').toDate(),
        cssClass: 'my-custom-class'
      }
    ];

    vm.calendarView = 'month';
    vm.viewDate = abcMoment().startOf('month').toDate();
    vm.cellIsOpen = true;

  });
