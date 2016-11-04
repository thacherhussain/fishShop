import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

angular.module('my-app', [angularMaterialize, uiRouter])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/main.html'
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html'
      });
  }]);
