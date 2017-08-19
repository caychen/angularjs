//1.3之后不再支持全局控制器，所以需要使用模块

//AngularJS 模块定义应用
angular.module("app", []).

//AngularJS 控制器控制应用
controller('firstController', function($scope){//该$scope是固定，称为作用域
	//申明一个Model
	$scope.name = "Cay";
});