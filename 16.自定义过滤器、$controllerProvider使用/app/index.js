angular.module('app', [], function($filterProvider,  $provide, $controllerProvider){

	$provide.factory('users', function(){
		return [{
			name:'张三',
			age:20,
			city:'上海',
			postcode:'021'
		},{
			name:'李四',
			age:25,
			city:'北京',
			postcode:'010'
		},{
			name:'王五',
			age:23,
			city:'苏州',
			postcode:'0512'
		},{
			name:'赵六',
			age:19,
			city:'南京',
			postcode:'025'
		},{
			name:'韩梅梅',
			age:29,
			city:'南京',
			postcode:'025'
		}];
	});

	//自定义过滤器方法一：
	//注册过滤器,函数内部返回一个函数,内部函数返回满足条件的数据
	$filterProvider.register('filterAge', function(){
		return function(users){
			var arr = [];
			angular.forEach(users, function(user, index){
				if(user.age >= 20){
					arr.push(user);
				}
			});
			return arr;
		};
	});

	//注册控制器
	$controllerProvider.register('firstController', function($scope, users){
		$scope.users = users;
	});
})

//自定义过滤器二
.filter('filterPostCode1', function(){
	return function(users){
		var arr = [];
		angular.forEach(users, function(user, index){
			if(user.postcode.indexOf('2') !== -1)
				arr.push(user);
		});
		return arr;
	}
})

.filter('filterCity2', function(){
	return function(users, param){
		var arr = [];
		angular.forEach(users, function(user, index){
			if(user.city.indexOf(param['city']) !== -1)
				arr.push(user);
		});
		return arr;
	}
});