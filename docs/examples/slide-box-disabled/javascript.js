angular
  .module('mwl.calendar.docs')
  .controller('SlideBoxDisabledCtrl', function(abcMoment, calendarConfig) {

    var vm = this;

    vm.events = [
      {
        title: 'Event 1',
        color: calendarConfig.colorTypes.warning,
        startsAt: abcMoment().startOf('month').toDate()
      },
      {
        title: 'Event 2',
        color: calendarConfig.colorTypes.info,
        startsAt: abcMoment().startOf('month').toDate()
      }
    ];

    vm.calendarView = 'month';
    vm.viewDate = abcMoment().startOf('month').toDate();

  });
