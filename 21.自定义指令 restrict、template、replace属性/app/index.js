angular.module('app', [], ['$compileProvider', function($compileProvider){
	$compileProvider.directive('customTags', function(){
		return {
			restrict: 'ECAM',
			template:'<div>新数据 <span ng-transclude></span></div>',
			compile: function(){
				console.log(1);
			},
			replace: true
		};
	});
}]);