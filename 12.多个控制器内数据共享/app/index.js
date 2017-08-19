angular.module('app', [])

//共享数据的方法二
.factory('Data', function(){
	return {
		message : '共享数据'
	};
})

.controller('firstController', ['$scope', 'Data', function($scope, Data){
	//共享数据的方法一（不推荐）：需要使用引用类型的数据才能实现共享数据
	$scope.data = {
		name:'zhangsan'
	};

	//console.log($scope);

	$scope.Data = Data;
}])

.controller('secondController', ['$scope', 'Data', function($scope, Data){
	$scope.data = $scope.$$prevSibling.data;
	// console.log($scope);

	$scope.Data = Data;
}]);