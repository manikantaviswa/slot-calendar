angular
  .module('mwl.calendar.docs')
  .controller('CellIsOpenCtrl', function(abcMoment, calendarConfig) {

    var vm = this;

    vm.events = [
      {
        title: 'Draggable event',
        color: calendarConfig.colorTypes.warning,
        startsAt: abcMoment().startOf('month').toDate()
      },
      {
        title: 'Non-draggable event',
        color: calendarConfig.colorTypes.info,
        startsAt: abcMoment().startOf('month').add(1, 'day').toDate()
      }
    ];

    vm.calendarView = 'month';
    vm.viewDate = abcMoment().startOf('month').toDate();
    vm.cellIsOpen = true;

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
