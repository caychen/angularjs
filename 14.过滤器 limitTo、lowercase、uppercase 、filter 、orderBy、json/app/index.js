angular.module('app', [])

.factory('data', function(){
	return {
		message : 'Hello World',
		city:[{
			name:'上海',
			postcode:'021'
		},{
			name:'北京',
			postcode:'010'
		},{
			name:'苏州',
			postcode:'0512'
		}]
	};
})

.controller('firstController', ['$scope', 'data', '$filter', function($scope, data, $filter){

	$scope.data = data;

	$scope.today = new Date();

	//过滤器
	var number = $filter('number')("3000");
	console.log(number);

	var jsonString = $filter('json')($scope.data);
	console.log(jsonString);

	//自定义过滤器，如果postcode含有'2'，则保留，否则不保留
	$scope.checkPostCode = function(obj){
		if(obj.postcode.indexOf('2') != -1){
			return true;
		}else{
			return false;
		}
	}
}]);