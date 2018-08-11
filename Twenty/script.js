var app = angular.module('mymodule',[])
  .controller('mycontroller', ($scope, $location, $anchorScroll) => {
    $scope.scrollTo = (scroll_location) => {
       $location.hash(scroll_location);
       $anchorScroll.yOffset = 20;
       $anchorScroll();
    }
  });
