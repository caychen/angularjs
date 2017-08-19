angular.module('app', [], function($provide){

	$provide.provider('CustomService', function(){
		this.$get = function(){
			return {
				message : 'CustomService Message'
			};
		}
	});

	//自定义工厂
	$provide.factory('CustomFatory', function(){
		//返回的内容可以是任何类型。
		return [1,2,3,4];
	});

	//自定义服务
	$provide.service('CustomService2', function(){
		//返回的内容必须是对象，不能返回字符串和数值，
		return ['上海'];
	});

}).controller('firstController', ['$scope', 'CustomService', 'CustomFatory','CustomService2','formService' , function($scope, CustomService, CustomFatory, CustomService2, formService){
	//AngularJS 控制器控制应用
	//自定义的服务就会自动注入到任何控制器中的参数CustomService，参数名必须与自定义的服务的名称一致
	console.log(CustomService);
	console.log(CustomFatory);
	console.log(CustomService2);
}])

.service('formService', ['$http', function($http){
	alert("...")
}])

//快捷方式
/*angular.module('', []).factory('name', ['', function(){
	return function name(){
		
	};
}]);

angular.module('', []).service('name', ['', function(){
	
}]);*/
//