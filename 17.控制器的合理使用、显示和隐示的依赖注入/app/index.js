/*
module函数也可以使用显式依赖注入的方式进行注入
angular.module('app', [], ['$filterProvider', '$provide', function(a, b){

}])*/

angular.module('app', [], function(){

})

.factory('CustomService', ['$window', function($window){
	console.log($window);
	return {

	};
}])

//隐式的依赖注入，当js进行压缩的时候，参数名会进行改变为a，b等，这样就会造成$scope无法正常依赖注入进来。
.controller('firstController', function($scope, CustomService){
	
})

//推荐使用显式的依赖注入
//显式的依赖注入，这样当js进行压缩的时候就不会报错(推荐使用)
//controller函数的第二个参数是一个数组，数组的前N-1个参数，分别对应function所需要的参数名
.controller('secondController', ['$scope', '$filter', 'CustomService', function(a, b, c){
	console.log(a);
	console.log(b('json')([1,2,3,4,5]));
}]);


//使用全局控制器
/*function otherController(a){
	console.log(a);
}
//使用控制器.$injector = ['']来显式的依赖注入
otherController.$injector = ['$scope'];*/