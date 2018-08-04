var myapp = angular.module("mymodule", [])
                   .controller("mycontroller", function($scope) {
                      var employee = {
                        fname: "Abhishek",
                        mname: "kumar",
                        lname: "Singh",
                        age: 24,
                        gender: "Male"
                      };
                      $scope.employee = employee;
                    });
