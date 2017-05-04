app.controller("homepage", function($scope, $http, $location, $routeParams) {

   $scope.homepage = function() {
       $location.path('/')
   }
   $scope.goto = function(index) {
       $location.path('/' + index + '/')

   };

})
