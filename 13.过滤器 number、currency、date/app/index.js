angular.module('app', [])

.factory('Data', function(){
	return {
		message : '共享数据'
	};
})

.controller('firstController', ['$scope', 'Data', function($scope, Data){

	$scope.Data = Data;

	$scope.today = new Date();
}]);