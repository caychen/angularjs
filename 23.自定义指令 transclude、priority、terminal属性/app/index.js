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

.controller('firstController', ['$scope', function($scope){
	$scope.name = 'Cay';
}])