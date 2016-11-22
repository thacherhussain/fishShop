import angular from 'angular'
import angularMaterialize from 'angular-materialize'

import uiRouter from 'angular-ui-router'

import CatalogCtrl from './catalog/catalog.controller'
import CatalogService from './catalog/catalog.service'

import CartCtrl from './cart/cart.controller'
import CartService from './cart/cart.service'

angular.module('my-app', [angularMaterialize, uiRouter])
  .service('CatalogService', CatalogService)
  .service('CartService', CartService)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl)
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
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html'
      })
      .state('catalog', {
        url: '/catalog',
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'CatalogCtrl'
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
