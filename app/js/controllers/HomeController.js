/*
* HomeController
*/
angular.module("app").controller('HomeController', function($scope, AuthenticationService){
	$scope.title = "Home";
	$scope.message = "mouse over this";

	$scope.logout = function() {
		 AuthenticationService.logout();
	}
});