angular.module('app', [])

.directive('customTags', function(){
	return {
		restrict:'ECAM',
		template:'<div>新数据</div>',

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
		templateUrl:'customTags2',//script的id
		
	};
})

.controller('firstController', ['$scope', function($scope){
	$scope.name = 'Cay';
}])