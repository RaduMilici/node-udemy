/*global angular*/
angular.module("app", []);

angular.module("app").controller("ctrl", ctrlFunc);
  
function ctrlFunc($scope){ $scope.input = "Hello!"; }