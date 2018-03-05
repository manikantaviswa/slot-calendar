angular
  .module('mwl.calendar.docs')
  .controller('RecurringEventsCtrl', function($scope, abcMoment, calendarConfig) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'month';
    vm.viewDate = abcMoment().toDate();
    vm.cellIsOpen = true;

    var events = [{
      title: 'Recurs on the 5th of each month',
      color: calendarConfig.colorTypes.warning,
      rrule: {
        freq: RRule.MONTHLY,
        bymonthday: 5
      }
    }, {
      title: 'Recurs yearly on the 10th of the current month',
      color: calendarConfig.colorTypes.info,
      rrule: {
        freq: RRule.YEARLY,
        bymonth: abcMoment().month() + 1,
        bymonthday: 10
      }
    }, {
      title: 'Recurs weekly on mondays',
      color: calendarConfig.colorTypes.success,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO],
      }
    }];

    $scope.$watchGroup([
      'vm.calendarView',
      'vm.viewDate'
    ], function() {

      vm.events = [];

      events.forEach(function(event) {

        // Use the rrule library to generate recurring events: https://github.com/jkbrzt/rrule
        var rule = new RRule(angular.extend({}, event.rrule, {
          dtstart: abcMoment(vm.viewDate).startOf(vm.calendarView).toDate(),
          until: abcMoment(vm.viewDate).endOf(vm.calendarView).toDate()
        }));

        rule.all().forEach(function(date) {
          vm.events.push(angular.extend({}, event, {
            startsAt: new Date(date)
          }));
        });

      });

    });

    vm.timespanClicked = function(date, cell) {

      if (vm.calendarView === 'month') {
        if ((vm.cellIsOpen && abcMoment(date).startOf('day').isSame(abcMoment(vm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
          vm.cellIsOpen = false;
        } else {
          vm.cellIsOpen = true;
          vm.viewDate = date;
        }
      } else if (vm.calendarView === 'year') {
        if ((vm.cellIsOpen && abcMoment(date).startOf('month').isSame(abcMoment(vm.viewDate).startOf('month'))) || cell.events.length === 0) {
          vm.cellIsOpen = false;
        } else {
          vm.cellIsOpen = true;
          vm.viewDate = date;
        }
      }

    };

  });
