var app = angular.module('choreApp', []);

app.controller("ChoreCtrl", function($scope){
	$scope.logChore = function(chore) {
		alert(chore + " is done!");
	}
})

app.directive('kid', function(){
	return {
		restrict: "E",
		scope:{
			done:"&"
		},
		template:  '<input type="text" ng-model="chore">{{chore}}</input>' +
		'<div class="button" ng-click="done({chore:chore})">I am done!</div>'
	}
});
