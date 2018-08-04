var myapp = angular.module("mymodule", [])
                   .controller("mycontroller", function($scope) {
                      var country = {
                        name: "India",
                        capital: "New Delhi",
                        flag: "../four/india_flag.png"
                      };
                      $scope.country = country;
                    });
