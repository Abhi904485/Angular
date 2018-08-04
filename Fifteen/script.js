var myapp = angular.module('mymodule', [])
  .controller('mycontroller', function($scope) {
    var countries = [{
      name: "UK",
      cities: [{
        name: "London"
      }, {
        name: "Manchester"
      }, {
        name: "Bringham"
      }]
    }, {
      name: "USA",
      cities: [{
        name: "Los angless"
      }, {
        name: "chicago"
      }, {
        name: "Hounston"
      }]
    }, {
      name: "India",
      cities: [{
        name: "Kanpur"
      }, {
        name: "Kannuaj"
      }, {
        name: "Bengaluru"
      }]
    }];
    $scope.countries = countries;
  });
