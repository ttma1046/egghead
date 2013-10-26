var myApp = angular.module('superhero', []);

myApp.directive('superman', function(){
	return {
		restrict: "A",
		link: function() {
			alert("I am working stronger!");
		}
	}
});

myApp.directive('flash', function(){
	return {
		restrict: "A",
		link: function() {
			alert("I am working faster!");
		}
	}
});