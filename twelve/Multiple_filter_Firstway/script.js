var myapp = angular.module('mymodule', [])
  .controller('mycontroller', function($scope) {
    var employees = [{
      name: "Abhishek",
      dateofbirth: new Date("January 12 1995"),
      age: 24,
      salary: 89000
    }, {
      name: "Suryansh",
      dateofbirth: new Date("May 08 1995"),
      age: 25,
      salary: 89000
    }, {
      name: "Nikhil",
      dateofbirth: new Date("September 23 1995"),
      age: 55,
      salary: 90000
    }, {
      name: "Puja",
      dateofbirth: new Date("October 19 1995"),
      age: 85,
      salary: 59000
    }];
    $scope.employees = employees;
    $scope.search_filter = {
      name: ""
    };
    $scope.sort_column = name;
    $scope.reverse_sort = false;
    $scope.sort_data = function(column) {
      $scope.reverse_sort = ($scope.sort_column == column) ? !$scope.reverse_sort : false;
      $scope.sort_column = column;
    }
    $scope.get_sort_class = function(column) {
      if ($scope.sort_column == column) {
        return $scope.reverse_sort ? 'arrow_down' : 'arrow_up';
      }
      return '';
    }
  });
