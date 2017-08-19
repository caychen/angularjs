angular.module('app', [], ['$provide',($provide) =>{

	console.log('module...');
	// $provide.factory(name, ['', function(){
	// 	return function name(){
			
	// 	};
	// }])
	
	// $provide.service(name, constructor)

	//$provide.constant(name, value);
	// $provide.value(name, value)

}])

.config(['APIKEY',/* 'version',*/ function(APIKEY/*, version*/) {
	console.log(APIKEY);//ok
	//console.log(version);//报错
	console.log('config...');
}])

//constant声明的常量可以在config中使用，而value声明的常量不能在config中使用
//constant声明的常量能在任何方法中使用
.constant('APIKEY', '123456')

//constant和value声明的常量能在controller，service，factory中使用
.value('version', 'v1.0.0')

.controller('firstController', ['APIKEY', 'version', 'aaa', function(APIKEY,version, aaa){
	console.log(APIKEY);
	console.log(version);
	console.log('controller...');
}])

//在config之后，在其他controller，service等服务之前
.run(['$rootScope', function($rootScope){
	console.log('run...');
}])

.service('aaa',function(){
	console.log('service...');
	return [1,2,3];
})