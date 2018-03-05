angular
  .module('mwl.calendar.docs')
  .controller('i18nCtrl', function($scope, $window, $ocLazyLoad, calendarConfig, abcMoment) {

    var vm = this;

    vm.events = [];
    vm.calendarView = 'month';
    vm.viewDate = abcMoment().startOf('month').toDate();

    calendarConfig.dateFormatter = 'moment'; // use abcMoment instead of angular for formatting dates
    var originali18n = angular.copy(calendarConfig.i18nStrings);
    calendarConfig.i18nStrings.weekNumber = 'Semaine {week}';

    $window.abcMoment = $window.abcMoment || abcMoment;
    $ocLazyLoad.load('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/locale/fr.js').then(function() {
      abcMoment.locale('fr', {
        week: {
          dow: 1 // Monday is the first day of the week
        }
      });
      abcMoment.locale('fr'); // change the locale to french
    });

    $scope.$on('$destroy', function() {
      abcMoment.locale('en');
      calendarConfig.i18nStrings = originali18n;
    });

  });
