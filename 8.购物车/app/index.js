angular.module('cartApp', []).controller('cartController',['$scope', function($scope){
	$scope.carts = [
		{
			id:1000,
			name:'iphone',
			count:3,
			price:4300
		},
		{
			id:2000,
			name:'三星',
			count:5,
			price:2300
		},
		{
			id:3000,
			name:'华为',
			count:8,
			price:1300
		},
		{
			id:4000,
			name:'中兴',
			count:10,
			price:900
		}
	];

	//计算总价
	$scope.totalPrice = function(){
		var total = 0;
		angular.forEach($scope.carts, function(cart, index){
			total += cart.price * cart.count;
		});
		return total;
	}

	//计算总数
	$scope. totalCount = function(){
		var count = 0;
		angular.forEach($scope.carts, function(cart, index){
			count += parseInt(cart.count);
		});
		return count;
	}

	var findIndex = function(id){
		var key = -1;
		angular.forEach($scope.carts, function(cart, index){
			if(cart.id === id){
				key = index;
				return ;
			}
		});
		return key;
	}

	$scope.remove = function(id){
		
		//arrayObject.splice(index,howmany,item1,.....,itemX)
		//从第index个开始删除howmany个数据，如果指定后面的N个参数，则会向数组中添加N个数据，并返回被删除的数据
		$scope.carts.splice(findIndex(id), 1);
	}

	$scope.add = function(id){

		$scope.carts[findIndex(id)].count++;
	}

	$scope.reduce = function(id){
		var index = findIndex(id);
		var cart = $scope.carts[index];
		if(cart.count > 1){
			$scope.carts[findIndex(id)].count--;
		}else{
			if(confirm('确定从购物车内删除该产品?')){
				$scope.remove(id);
			}
		}
	}

	$scope.$watch('carts', function(newValue, oldValue, scope) {
		angular.forEach(newValue, function(item, key){
			if(item.count < 1){
				if(confirm('确定从购物车内删除该产品?')){
					$scope.remove(item.id);
				}else{
					item.count = oldValue[key].count;
				}
				return;
			}
		});
	}, true);
}]);