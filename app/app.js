import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

import CartCtrl from './cart/cart.controller';
import CartService from './cart/cart.service';

import CatalogCtrl from './catalog/catalog.controller';
import CatalogService from './catalog/catalog.service';


angular.module('my-app', [angularMaterialize, uiRouter])

  .controller('CartCtrl', CartCtrl)
  .service('CartService', CartService)

  .service('CatalogService', CatalogService)
  .controller('CatalogCtrl', CatalogCtrl)


  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'CatalogCtrl'
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'CatalogCtrl'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'CartCtrl'
      })
      .state('catalog', {
        url: '/catalog',
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'CatalogCtrl'
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'views/checkout.html',
        controller: 'CartCtrl',
        controllerAs: 'CartCtrl'
      })
      .state('thanks', {
        url: '/thanks',
        templateUrl: 'views/thanks.html'
      })
      ;
  }]);
