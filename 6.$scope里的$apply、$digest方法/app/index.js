//1.3之后不再支持全局控制器，所以需要使用模块

//AngularJS 模块定义应用
var app = angular.module("app", []);

//AngularJS 控制器控制应用
app.controller('firstController', function($scope){//该$scope是固定，称为作用域
	//申明一个Model
	$scope.date = new Date();

	//虽然将$scope的date变化了，但是并没有触发angularjs的脏检查。所以不会动态修改date值。
	setInterval(() => {
		$scope.date = new Date();
	}, 1000);

	//使用$scope里的$apply方法来动态修改date值。
	setInterval(() => {
		$scope.$apply(() => {
				//会去触发脏检查
				$scope.date = new Date();
		});
	}, 1000);
});