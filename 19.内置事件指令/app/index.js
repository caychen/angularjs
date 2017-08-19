angular.module('app', [])

.controller('firstController', ['$scope', function($scope){
	$scope.status1 = false;
	$scope.status2 = false;

	$scope.changeStatus = function(event){
		console.log(event.target);
		//angular.element把dom元素或html标签转换为jquery对象
		angular.element(event.target).html('切换状态为:' + $scope.status2);

		$scope.status2 = !$scope.status2;

	}
}]);