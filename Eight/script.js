
  var myapp=  angular.module('mymodule',[])
        .controller('mycontroller', function ($scope) {
          var technologies = [{
            name: "C#",
            likes: 0,
            dislikes: 0
          }, {
            name: "Java",
            likes: 0,
            dislikes: 0
          }, {
            name: "Angular",
            likes: 0,
            dislikes: 0
          }, {
            name: "Python",
            likes: 0,
            dislikes: 0
          }];
         $scope.technologies = technologies;
         $scope.limit = 3
         $scope.increment_likes = function (technology) {
                technology.likes++;
         }
         $scope.increment_dislikes = function (technology) {
                technology.dislikes++;
         }
        });
