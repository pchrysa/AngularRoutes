var app = angular.module('myApp', ['ngRoute', 'controllerMod']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'partials/main.html',
		controller: 'MainCtrl'
	})
	.when('/create', {
		templateUrl : 'partials/play.html',
		controller: 'PlayCtrl'
	})
	.when('/play', {
		templateUrl : 'partials/create.html',
		controller: 'CreateCtrl'
	})
	.otherwise({
		redirectTo : '/'
	})
}]);