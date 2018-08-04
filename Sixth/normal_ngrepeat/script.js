var myapp = angular.module('mymodule', [])
            .controller("mycontroller", function($scope) {
                var employees = [
                  {fname:"Abhishek",lname:"Singh",gender:"M",salary:"57000"},
                  {fname:"Abhishek",lname:"Singh",gender:"M",salary:"57000"},
                  {fname:"Abhishek",lname:"Singh",gender:"M",salary:"57000"},
                  {fname:"Abhishek",lname:"Singh",gender:"M",salary:"57000"},
                ];
                $scope.employees =employees;
            });
