var app = angular.module('mymodule', [])
  .controller('mycontroller', ($scope, stringservice) => {
    $scope.onsubmit = (input) => {
      $scope.output = stringservice.result(input);
    }
  });
