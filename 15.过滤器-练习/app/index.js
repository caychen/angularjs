angular.module('product', [])

.factory('productData', function(){
	return [{
		name:'iphone6s',
		price:5500,
		id:657
	},{
		name:'三星',
		price:1500,
		id:941
	},{
		name:'华为',
		price:900,
		id:154
	},{
		name:'中兴',
		price:1000,
		id:364
	},{
		name:'OPPO',
		price:1200,
		id:258
	}];
})

.controller('productController', ['$scope', 'productData', function($scope, productData){
	$scope.productData = productData;
	
	$scope.orderByType = 'id';

	$scope.order = '-';

	$scope.changeOrder = function(type){
		$scope.orderByType = type;
		if($scope.order === ''){
			$scope.order = '-';
		}else{
			$scope.order = '';
		}
	};
}]);