var app = angular.module('app', []);

app.controller("MyCtrl", ['$scope', '$http', function (b, a) {
	console.log(b);
}] );


	//function ($http, $scope, $parse){
	//console.log($http);
//});

app.directive("myDirective", function() {
	return {
		link: function (element, scope, attrs) {
			// console.log(element);
		}		
	};
});
