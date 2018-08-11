var app = angular.module('mymodule', [])
  .controller('mycontroller', ($scope, $location, $anchorScroll) => {
    var countries = [{
        name: "India",
        cities: [{
          name: "Kanpur"
        }, {
          name: "Kannauj"
        }, {
          name: "Bengaluru"
        }, {
          name: "Rasoolabad"
        }]
      }, {
        name: "UK",
        cities: [{
          name: "London"
        }, {
          name: "Manchester"
        }, {
          name: "Bringham"
        }]
      },
      {
        name: "USA",
        cities: [{
          name: "Los angless"
        }, {
          name: "chicago"
        }, {
          name: "Hounston"
        }]
      }
    ];
    $scope.countries = countries;
    $scope.scrollTo = (scroll_location) => {
    $location.hash(scroll_location);
    $anchorScroll.yOffset = 20;
    $anchorScroll();
    }
  });
