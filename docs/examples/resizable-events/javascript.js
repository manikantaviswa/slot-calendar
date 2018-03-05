angular
  .module('mwl.calendar.docs')
  .controller('ResizableEventsCtrl', function(abcMoment, alert, calendarConfig) {

    var vm = this;

    vm.events = [
      {
        title: 'Resizable event',
        color: calendarConfig.colorTypes.warning,
        startsAt: abcMoment().startOf('month').toDate(),
        endsAt: abcMoment().startOf('month').add(1, 'hour').toDate(), //ends at is required
        resizable: true
      },
      {
        title: 'Non-resizeable event',
        color: calendarConfig.colorTypes.info,
        startsAt: abcMoment().startOf('month').toDate(),
        endsAt: abcMoment().startOf('month').add(1, 'hour').toDate(), //ends at is required
        resizable: false
      }
    ];

    vm.calendarView = 'week';
    vm.viewDate = abcMoment().startOf('month').toDate();

    vm.eventTimesChanged = function(event) {
      alert.show('Resized', event);
    };

  });
