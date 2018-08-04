var myapp = angular.module('mymodule', [])
  .controller('mycontroller', function($scope) {
    var employees = [{
      name: "Abhishek",
      dateofbirth: new Date("January 12 1995"),
      age: 24,
      salary: 9000
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
    $scope.sort_coloum  = name;
  });
