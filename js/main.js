var myApp = angular.module('myApp', []);

myApp.factory('Whatuwant', function() {
	return { message: 'Anything you want from a service.'};
});

myApp.filter('reverse', function (Whatuwant) {
	return function (text) {
		return text.split("").reverse().join("") + Whatuwant.message;
	};
});

function FirstCtrl($scope, Whatuwant) {
	$scope.data = Whatuwant;
}

function SecondCtrl($scope, Whatuwant) {
	$scope.data = Whatuwant;

	$scope.reversedMessage = function (message) {
		return message.split("").reverse().join("");
	}
}