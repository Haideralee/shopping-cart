'use strict';

angular.module('shoppingCartApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: '/category',
        templateUrl: 'app/main/category/category.html',
        controller: 'CategoryCtrl'
      });
  });