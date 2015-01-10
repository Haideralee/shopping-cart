'use strict';

angular.module('shoppingCartApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.products = [];

    $http.get('/api/categoriess').success(function(product) {
      $scope.products = product;
      socket.syncUpdates('categories', $scope.products);
    });
  });
