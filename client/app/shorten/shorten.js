angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.url = '';
  $scope.link = {};
  $scope.addLink = function() {
    $scope.link.url = $scope.url;
    Links.addOne($scope.link)
    .then(function(link) {
      $location.url('/links');
    });
  };
});
