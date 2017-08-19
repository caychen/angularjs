angular.module('app', [])

.factory('Data', function(){
	return [{
		title:'No.1',
		content:'No.1 Content'
	},{
		title:'No.2',
		content:'No.2 Content'
	},{
		title:'No.3',
		content:'No.3 Content'
	}];
})

.controller('firstController', ['$scope', 'Data', ($scope, Data) => {
	$scope.data = Data;
}])

.directive('kittencupGroup', ()=>{
	return {
		restrict:'E',
		replace:true,
		transclude:true,
		template:'<div class="panel-group" ng-transclude></div>',
		controllerAs:'kittencupGroupController',
		controller:function($scope){
			this.groups = [];

			this.closeOtherCollapse = (nowScope)=>{
				angular.forEach(this.groups, function(scope, key){
					if(nowScope !== scope){
						scope.isOpen = false;
					}
				});
			};
		}
	};
})

.directive('kittencupCollapse', () =>{
	return {
		restrict:'E',
		replace :true,
		template: 	'<div class="panel panel-default">'+
					    '<div class="panel-heading" ng-click="changeOpen();">'+
					      '<h4 class="panel-title">'+
					       ' <a href="#">{{heading}}'+
					       ' </a>'+
					      '</h4>'+
					    '</div>'+
					    '<div class="panel-collapse" ng-class="{collapse:!isOpen}">'+
					      '<div class="panel-body" ng-transclude>'+
					      '</div>'+
					    '</div>'+
					'</div>',
		scope:{
			heading:'@'
		},
		require:'^kittencupGroup',
		transclude:true,
		link:function(scope, element, attrs, kittencupGroupController) {//在每个panel里都有一个scope，所以点击标题后，修改的是当前panel里的scope，而不会影响其他的scope里的isOpen属性
			scope.isOpen = false;

			scope.changeOpen = () =>{
				scope.isOpen = !scope.isOpen;

				kittencupGroupController.closeOtherCollapse(scope);
			};

			kittencupGroupController.groups.push(scope);
		},
		
	}
})