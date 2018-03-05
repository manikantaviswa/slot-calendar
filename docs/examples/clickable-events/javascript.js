angular
  .module('mwl.calendar.docs')
  .controller('ClickableEventsCtrl', function(abcMoment, alert, calendarConfig) {

    var vm = this;

    vm.events = [
      {
        title: 'Click me',
        color: calendarConfig.colorTypes.warning,
        startsAt: abcMoment().startOf('month').toDate()
      },
      {
        title: 'Or click me',
        color: calendarConfig.colorTypes.info,
        startsAt: abcMoment().startOf('month').toDate()
      }
    ];

    vm.calendarView = 'month';
    vm.viewDate = abcMoment().startOf('month').toDate();
    vm.cellIsOpen = true;

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

  });
