
var app = angular.module("app", ['ngRoute']).config(function($routeProvider){
	
	$routeProvider.when('/login', {
		templateUrl: 'login.html',
		controller: 'LoginController'
	});

	$routeProvider.when('/home', {
		templateUrl: 'home.html',
		controller: 'HomeController'
	});

	$routeProvider.otherwise({ redirectTo : '/login' });
});

/*
* Authentication Service
* encapsulate, isolate
*/
app.factory("AuthenticationService", function($location){
	return {
		login: function(credentials){
			if(credentials.username === "carlos"){
				$location.path('/home');
			}else{	
				alert("username should be carlos");
			}
		},
		logout: function(){
			$location.path('/login');
		}
	};
});

/*
* LoginController
*/
app.controller('LoginController', function($scope, AuthenticationService){
	$scope.credentials = { username: "", password: "" };

	$scope.login = function(){
		AuthenticationService.login($scope.credentials);
	};

});

/*
* HomeController
*/
app.controller('HomeController', function($scope, AuthenticationService){
	$scope.title = "Home";
	$scope.message = "mouse over this";

	$scope.logout = function() {
		 AuthenticationService.logout();
	}
});


/*
* Some custom directives
*/
app.directive('showsMessageWhenHovered', function() {
	return {
		restrict: "A", // A = Attribute, C = Classname, E = Element, M = HTML Comment
		link: function(scope, element, attributes){
			var originalMessage = scope.message;
			element.bind("mouseover", function(){
				scope.message = attributes.message;
				scope.$apply();
			});
			element.bind("mouseout", function(){
				scope.message = attributes.message;
				scope.$apply();
			});
		}
	}
});