var myApp = angular.module('myApp', []);

myApp.factory('Whatuwant', function() {
	return { message: 'Anything you want from a service.'};
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