angular.module('app', [], ['$provide',($provide) =>{


}])

.controller('firstController', ['$scope', function($scope){
	$scope.hobbies = [{
		id:1,
		name:'玩游戏'
	},{
		id:2,
		name:'写代码'
	},{
		id:3,
		name:'看电影'
	},{
		id:4,
		name:'听音乐'
	}];

	$scope.hobbyIds = [1, 2];

	$scope.toggleSelection = (id)=>{
		var index = -1;
		/*angular.forEach($scope.hobbyIds, function(hobbyId, key){
			if(hobbyId === id){
				index = key;
				return;
			}
		});*/
		index = $scope.hobbyIds.indexOf(id);

		if(index !== -1){
			$scope.hobbyIds.splice(index, 1);
		}else{
			$scope.hobbyIds.push(id);
		}
	};
}])