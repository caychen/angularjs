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

	$scope.defaultStyle = {
		color:'green',
		marginTop: '20px'//key不能使用margin-top，可以使用marginTop或者'margin-top'
	}

	$scope.src = 'https://static.bootcss.com/www/assets/img/vuejs.png?1501063561238';
}]);