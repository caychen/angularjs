angular.module('app', [])

.directive('bookList', function(){
	return {
		restrict:'ECAM',
		controller:$scope => {
			console.log($scope);

			//console.log($scope.a());
		},
		//scope默认为false
		//scope:false,//controller属性的$scope和controller函数中的$scope一样
		//scope:true,//创建一个有继承链的独立作用域
		scope:{//当scope为对象的时候也会创建一个独立的作用域
			age:'=forAge',
			name:'@forName',
			btnAdd:'&btnAddEx'
		},
		controllerAs:'bookListController',//起别名
		//template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>',
		template:'<div>指令中：<span ng-bind="age"></span><br/>'+
				'<span ng-bind="name"></span><br/>'+
				'<btn-modify></btn-modify>'+ '&nbsp;' + 
				'<button ng-click="btnAdd();">增加1</button>' +
				'</div>',
		replace:true,
	}
})

.directive('btnModify', function(){
	return {
		restrict:'EACM',
		replace:true,
		template:'<button>清空</button>',
		link:(scope, element, attr) => {
			element.on('click', () => {
				scope.$apply(() => {
					scope.age = 0;
					scope.name = 'Amy';
				});
			});
		}
	};
})

.controller('firstController', ['$scope', $scope => {
	//类似指令中的controller属性
	//console.log($scope);
	$scope.books = [{
		name:'php'
	},{
		name:'javascript'
	},{
		name:'java'
	}];

	$scope.age = 20;
	$scope.name = 'Cay';

	$scope.btnAddEx = () => {
		$scope.age++;
	};
}]);