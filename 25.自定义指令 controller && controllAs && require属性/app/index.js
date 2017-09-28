angular.module('app', [])

.directive('bookList', function(){
	return {
		restrict:'ECAM',
		controller:['$scope', function($scope){
			console.log($scope);
			$scope.books = [{
				name:'php'
			},{
				name:'javascript'
			},{
				name:'java'
			}];

			$scope.addBook = function(){
				alert("....");
			}

			this.insertBook = function(){
				$scope.$apply(function(){
					$scope.books.push({name:'angularjs'});

				});
			}
		}],
		controllerAs:'bookListController',//起别名
		template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
		replace:true,
		link:function(scope, element, attrs, controller){
			console.log(controller);
			element.on('click', scope.addBook);
		}
	}
})

.directive('bookAdd', function(){
	return {
		restrict:'EACM',
		template:'<button>添加</button>',
		replace:true,
		require:'?^bookList',//因为book-add标签在bookList内部，所以需要添加^
		link:function(scope, element, attrs, bookListController){
			element.on('click', bookListController.insertBook);
		}
	}
})

.controller('firstController', ['$scope', function($scope){
	//类似指令中的controller属性
}]);