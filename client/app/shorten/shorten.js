angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.url = '';
  $scope.link = { url: $scope.url };
  $scope.addLink = function() {
    Links.addOne($scope.link);
    $location.path = '/links';
  };
});
