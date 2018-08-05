var myapp = angular.module('mymodule', [])
  .controller('mycontroller', function($scope) {
    var employees = [{
      name: "Abhishek",
      age: 25,
      salary: 57000,
      language: "Hindi"
    }, {
      name: "Abhishek",
      age: 25,
      salary: 57000,
      language: "Hindi"
    }, {
      name: "Abhishek",
      age: 25,
      salary: 57000,
      language: "Hindi"
    }, {
      name: "Abhishek",
      age: 25,
      salary: 57000,
      language: "Hindi"
    }];
    $scope.employees = employees;
    $scope.other_html = "other.html";
  });
