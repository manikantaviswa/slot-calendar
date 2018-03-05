angular
  .module('mwl.calendar.docs')
  .controller('EditableDeletableEventsCtrl', function(abcMoment, alert, calendarConfig) {

    var vm = this;

    vm.events = [
      {
        title: 'Editable event',
        color: calendarConfig.colorTypes.warning,
        startsAt: abcMoment().startOf('month').toDate(),
        actions: [{
          label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
          onClick: function(args) {
            alert.show('Edited', args.calendarEvent);
          }
        }]
      }, {
        title: 'Deletable event',
        color: calendarConfig.colorTypes.info,
        startsAt: abcMoment().startOf('month').toDate(),
        actions: [{
          label: '<i class=\'glyphicon glyphicon-remove\'></i>',
          onClick: function(args) {
            alert.show('Deleted', args.calendarEvent);
          }
        }]
      }, {
        title: 'Non editable and deletable event',
        color: calendarConfig.colorTypes.important,
        startsAt: abcMoment().startOf('month').toDate()
      }
    ];

    vm.calendarView = 'month';
    vm.viewDate = abcMoment().startOf('month').toDate();
    vm.cellIsOpen = true;

  });
