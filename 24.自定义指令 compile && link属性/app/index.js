angular.module('app', [])

.directive('customTags', function(){
	return {
		restrict:'ECAM',
		template:'<div>新数据 | <span ng-transclude></span></div>',
		transclude:true,//当设为true，指令会删掉原来的内容，然后在使用的模版中用ng-transclude指令进行重新插入。

		//需要放到服务器上运行
		//templateUrl:'tmp/other.html',
		replace:true
	};
})

.directive('customTags1', function(){
	return {
		restrict: 'EACM',
		replace: true,
		template:'<div>aaaa</div>',
		compile : function(){

		},
		link:function(){
			
		}
	};
})

//使用<script type="text/ng-template" id="customTags"></script>
.directive('customTags2', function(){
	return {
		restrict:'ECAM',
		replace: true,
		templateUrl:'customTags2',//对应于script的id
	};
})

.directive('customTags3', function(){
	return {
		restrict:'ECAM',
		replace:true,
		template:'<div>3</div>',
		priority:3
	}
})

.directive('customTags4', function(){
	return {
		restrict:'ECAM',
		replace:true,
		template:'<div>4</div>',//在同一个标签内使用多个指令，如果有多个template则会报错，所以只能有一个template

		//设置terminal为true时，只要其他priority的值小于该指令的priority值，则其他指令不执行
		priority:4,//默认为0
		terminal:true
	}
})

.directive('directive1', function(){
	return {
		restrict:'ECAM',
		template:'<div>directive1</div>',
		compile: function(tElement, tAttrs, transclude){
			console.log(tElement, tAttrs);

			//可以在compile编译阶段更改dom结构

			//编译阶段...
			console.log("directive1 compile...");

			//返回对象，里面包含preLink和postLink函数
			return {
				//表示在编译阶段之后，指令连接到子元素之前运行
				pre: function(scope, iElement, iAttrs, controller){
					console.log("directive1 compile preLink...");
				},
				//表示在所有子元素指令都连接之后才运行
				post: function(scope, iElement, iAttrs, controller){
					console.log("directive1 compile postLink...");
				}
			};

			/*return function(){//直接返回的函数则是postLink
				console.log("directive1 compile return ...");
			};*/
		},
		link:function(){//postLink
			//有了compile，link可以不需要，因为compile内部就是返回link
		}
	};
})

.directive('directive2', function(){
	return {
		restrict:'ECAM',
		/*template:'<div>directive2</div>',*/
		compile: function(){
			console.log("directive2 compile...");

			return {
				//表示在编译阶段之后，指令连接到子元素之前运行
				pre: function(){
					console.log("directive2 compile preLink...");
				},
				//表示在所有子元素指令都连接之后才运行
				post: function(){
					console.log("directive2 compile postLink...");
				}
			};

			/*return function(){
				console.log("directive2 compile return...");
			};*/
		},
	};
})

.directive('directive3', function(){
	return function{
		//其实就是post的link函数
	};
})

.controller('firstController', ['$scope', function($scope){
	$scope.name = 'Cay';
}])

.controller('secondController', ['$scope', function($scope){
	$scope.users = [{
		id:10,
		name:'zhangsan',
	},{
		id:20,
		name:'lisi'
	}];
}])