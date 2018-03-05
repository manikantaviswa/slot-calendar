angular
  .module('mwl.calendar.docs')
  .controller('ExcludeWeekdays', function(abcMoment, calendarConfig) {

    var vm = this;
    vm.events = [
      {
        title: 'An event',
        color: calendarConfig.colorTypes.warning,
        startsAt: abcMoment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: abcMoment().startOf('week').add(1, 'week').add(9, 'hours').toDate()
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        color: calendarConfig.colorTypes.info,
        startsAt: abcMoment().subtract(1, 'day').toDate(),
        endsAt: abcMoment().add(5, 'days').toDate()
      }, {
        title: 'This is a really long event title that occurs on every year',
        color: calendarConfig.colorTypes.important,
        startsAt: abcMoment().startOf('day').add(7, 'hours').toDate(),
        endsAt: abcMoment().startOf('day').add(19, 'hours').toDate()
      }
    ];
    vm.calendarView = 'week';
    vm.viewDate = new Date();
    vm.excludedDays = [0, 6];

  });
