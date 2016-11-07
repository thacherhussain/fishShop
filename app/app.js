import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

angular.module('my-app', [angularMaterialize, uiRouter])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/home.html',
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/home.html',
      })
      .state('shops', {
        url: '/shops',
        templateUrl: 'views/shops.html'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'views/user/user.html'
      })
      .state('user.profile', {
        url: '/profile',
        templateUrl: 'views/user/profile.html'
      })
      .state('user.account', {
        url: '/account',
        templateUrl: 'views/user/account.html'
      });

  }]);
