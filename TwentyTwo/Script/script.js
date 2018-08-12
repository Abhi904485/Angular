var app = angular.module('mymodule', ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "Templates/home.html",
        controller: "home_controller"
      })
      .when("/courses", {
        templateUrl: "Templates/courses.html",
        controller: "courses_controller"
      })
      .when("/students", {
        templateUrl: "Templates/students.html",
        controller: "students_controller"
      })
  })
  .controller('home_controller', ($scope) => {
    $scope.home = "this is home page";
  })
  .controller('courses_controller', ($scope) => {
    $scope.courses = "this is Courses page";
  })
  .controller('students_controller', ($scope) => {
    $scope.students = "this is Students page";
  })
