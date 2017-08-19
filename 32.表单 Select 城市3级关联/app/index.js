angular.module('app', [], ['$provide', ($provide) => {

}])

.filter('cityFilter', function() {
	return function(data, params) {
		var filterData = [];
		angular.forEach(data, function(obj, index) {
			if (obj.parent === params.parent) {
				filterData.push(obj);
			}
		});

		return filterData;
	};
})

.controller('firstController', ['$scope', function($scope) {
	$scope.hobbies = [{
		id: 1,
		name: '玩游戏'
	}, {
		id: 2,
		name: '写代码'
	}, {
		id: 3,
		name: '看电影'
	}, {
		id: 4,
		name: '听音乐'
	}];

	$scope.data = {
		hobbyIds : [1,2]
	}

	$scope.toggleSelection = (id) => {
		var index = -1;
		/*angular.forEach($scope.hobbyIds, function(hobbyId, key){
			if(hobbyId === id){
				index = key;
				return;
			}
		});*/
		index = $scope.data.hobbyIds.indexOf(id);

		if (index !== -1) {
			$scope.data.hobbyIds.splice(index, 1);
		} else {
			$scope.data.hobbyIds.push(id);
		}
	};

	$scope.cities = [{
		name: '上海',
		parent: 0,
		id: 1
	}, {
		name: '上海市',
		parent: 1,
		id: 2
	}, {
		name: '徐汇区',
		parent: 2,
		id: 8
	}, {
		name: '长宁区',
		parent: 2,
		id: 3
	}, {
		name: '北京',
		parent: 0,
		id: 4
	}, {
		name: '北京市',
		parent: 4,
		id: 5
	}, {
		name: '东城区',
		parent: 5,
		id: 6
	}, {
		name: '丰台区',
		parent: 5,
		id: 7
	}, {
		name: '浙江',
		parent: 0,
		id: 9
	}, {
		name: '杭州',
		parent: 9,
		id: 100
	}, {
		name: '宁波',
		parent: 9,
		id: 11
	}, {
		name: '西湖区',
		parent: 100,
		id: 12
	}, {
		name: '北仑区‎',
		parent: 11,
		id: 13
	}];
}])