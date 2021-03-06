angular
  .module('mwl.calendar.docs')
  .controller('AllDayEventsCtrl', function(abcMoment, calendarConfig) {

    var vm = this;

    vm.events = [
      {
        title: 'An all day event',
        color: calendarConfig.colorTypes.warning,
        startsAt: abcMoment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: abcMoment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        allDay: true
      }, {
        title: 'A non all day event',
        color: calendarConfig.colorTypes.important,
        startsAt: abcMoment().startOf('day').add(7, 'hours').toDate(),
        endsAt: abcMoment().startOf('day').add(19, 'hours').toDate(),
        draggable: true,
        resizable: true
      }
    ];

    vm.calendarView = 'day';
    vm.viewDate = abcMoment().toDate();

  });
