'use strict';

angular.module('shoppingCartApp')
  .controller('CategoryCtrl', function ($scope, $http, socket) {
    $scope.newCategory = null;
    $scope.products = [];

    $scope.createCat = function(){
      if($scope.newCategory === '' || $scope.newCategory === null) {
        return;
      }
      $http.post('/api/categoriess', { name: $scope.newCategory })
      $scope.newCategory = '';
    };
    //////////////////////////////
    $http.get('/api/categoriess').success(function(product) {
      $scope.products = product;
      socket.syncUpdates('categories', $scope.products);
    });

    $scope.deleteProduct = function(product) {
      $http.delete('/api/categoriess/' + product._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('categories');
    });
  });
