var myapp = angular.module('mymodule',[])
  .controller('mycontroller', function($scope, $http) {
      $http.get("http://127.0.0.1:8000/employees")
      .then((response) => {
        $scope.res = response.data;
        console.log($scope.res);
      })
  });
