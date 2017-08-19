angular.module('app', [], function($provide){
	//自定义服务
	$provide.provider('CustomService', function(){
		this.$get = function(){
			return {
				message : 'CustomService Message'
			};
		}
	});
}).controller('firstController', ['$scope', 'CustomService' , function($scope, CustomService){
	//AngularJS 控制器控制应用
	//自定义的服务就会自动注入到任何控制器中的参数CustomService，参数名必须与自定义的服务的名称一致
	console.log(CustomService);
}]);