import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';
import CatalogCtrl from './controllers/catalog.controller';

angular.module('my-app', [angularMaterialize, uiRouter])
  .controller('CatalogCtrl', CatalogCtrl)
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
      .state('catalog', {
        url: '/catalog',
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalogCtrl'
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
