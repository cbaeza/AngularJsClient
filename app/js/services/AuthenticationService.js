/*
* Authentication Service
* encapsulate, isolate
*/
angular.module("app").factory("AuthenticationService", function($location){
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