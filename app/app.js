import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

import AuthCtrl from './auth/auth.controller';
import AuthService from './auth/auth.service';

import CartCtrl from './cart/cart.controller';
import CartService from './cart/cart.service';

import CatalogCtrl from './catalog/catalog.controller';
import CatalogService from './catalog/catalog.service';

import OrdersCtrl from './orders/orders.controller';
import OrdersService from './orders/orders.service';

import SignUpCtrl from './signup/signup.controller';
import SignUpService from './signup/signup.service';

angular.module('my-app', [angularMaterialize, uiRouter])
  .service('AuthService', AuthService)
  .controller('AuthCtrl', AuthCtrl)

  .controller('CartCtrl', CartCtrl)
  .service('CartService', CartService)

  .service('CatalogService', CatalogService)
  .controller('CatalogCtrl', CatalogCtrl)

  .controller('OrdersCtrl', OrdersCtrl)
  .service('OrdersService', OrdersService)

  .service('SignUpService', SignUpService)
  .controller('SignUpCtrl', SignUpCtrl)

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/home.html'
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/home.html'
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

      // .state('user', {
      //   url: '/user',
      //   templateUrl: 'views/user/user.html'
      // })
      // .state('user.profile', {
      //   url: '/profile',
      //   templateUrl: 'views/user/profile.html'
      // })
      // .state('user.account', {
      //   url: '/account',
      //   templateUrl: 'views/user/account.html'
      // })
      .state('orders', {
        url: '/orders',
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl',
        controllerAs: 'OrdersCtrl'
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'views/checkout.html',
        controller: 'OrdersCtrl',
        controllerAs: 'OrdersCtrl'
      })
      .state('thanks', {
        url: '/thanks',
        templateUrl: 'views/thanks.html'
      })
      ;
  }]);
