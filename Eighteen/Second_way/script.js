var app = angular.module('mymodule', [])
  .controller('mycontroller', function($scope, $http, $log) {
    var sucess_callback = (response) => {
      $scope.employees = response.data;
      $scope.config = response.config;
      $scope.status = response.status;
      $scope.headers = response.headers;
      $log.info(response)
    };

    var failure_callback = (reason) => {
      $scope.error = reason.data
      $log.info(reason)
    };

    $scope.employees = $http({
      method: "GET",
      url: "http://127.0.0.1:8000/employees"
    }).then(sucess_callback, failure_callback)
  });
