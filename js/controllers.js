var controllersMod = angular.module('controllerMod', []) ;

controllersMod.controller('MainCtrl',  ['$scope', '$http', function($scope, $http) {
}]);

controllersMod.controller('PlayCtrl',  ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data){
		$scope.gems = data;
	});
}]);


controllersMod.controller('CreateCtrl', ['$scope', '$http', function($scope, $http) {
	var git_api = 'https://api.github.com';
	$http.get(git_api+'/users/pchrysa').success(function(data){
		$scope.jsonP = data.avatar_url;
	});
}]);

