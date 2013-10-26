var myApp = angular.module('behaviorApp', []);

myApp.directive('enter', function(){
	return  function(scope, element) {
		element.bind("mouseenter", function() {
			console.log("I am inside of you!");
		});
	};
});

myApp.directive('leave', function(){
	return  function(scope, element) {
		element.bind("mouseleave", function() {
			console.log("I am leaving on a jet plane!");
		});
	};
});
