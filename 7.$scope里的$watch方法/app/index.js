//1.3之后不再支持全局控制器，所以需要使用模块

//AngularJS 模块定义应用
var app = angular.module("app", []);

//AngularJS 控制器控制应用
app.controller('firstController', function($scope){//该$scope是固定，称为作用域
	//申明一个Model
	$scope.name = "Cay";

	$scope.count = 0;

	$scope.data = {
		age: 20,
		email:'123456@qq.com'
	};

/**
  $watch(watchFn, watchAction, deepWatch):
	watchFn:angular表达式或函数的字符串
	watchAction(newValue, oldValue,scope):watchFn发生变化会被调用
	deepWatch:可选的布尔值命令检查被监控的对象的每一个属性是否发生变化。
 */
	//监听了一个model，当一个model每次被改变时，都会触发第二个参数所对应的函数
	$scope.$watch("name", function(newValue, oldValue){
		$scope.count++;
		if($scope.count > 10){
			$scope.name = "已经大于10次了";
		}
	});


	//当最后一个参数设为true，则当data里面的任意属性发生改变时，就会触发函数
	//当最后一个参数设为false，则只有当data改变为另外对象后才触发函数，而如果data改变后还是object对象{}，则不会触发函数
	$scope.$watch("$scope.data", function(newValue, oldValue){

	}, true);
});