angular.module('myApp', [])
.controller('MainController', function($scope) {
  $scope.name = "Ari";
  $scope.sayHello = function() {
    $scope.greeting = "Hello " + $scope.name;
  }
  $scope.changename= function(){
  	$scope.name= "Harsha";
  }
})
.directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
    };
});