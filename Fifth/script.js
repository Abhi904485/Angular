var myapp = angular.module("mymodule", [])
            .controller("mycontroller", function($scope) {
            var country = {
              name: "India",
              capital: "New delhi",
              language: "Hindi"
            }
            $scope.country = country;
});
