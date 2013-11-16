var myApp = angular.module('myApp', []);

myApp.directive("zippy", function() {
	return{
		restrict:"E",
		transclude:true,
		scope: {
			title:"@"
		},
		template:'<div>
					<h3 ng-click="toggleContent()">{{title}}</h3>
					<div ng-show="isContentVisable" ng-transclude></div>
				  </div>',
		link: function(scope) {
			scope.isContentVisable = false;

			scope.toggleContent = function() {
				scope.isContentVisable = !scope.isContentVisable;
			}
		}
	};
})
