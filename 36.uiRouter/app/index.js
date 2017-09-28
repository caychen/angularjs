angular.module('app', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	//默认重定向到/home
	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		//templateUrl: 'home.html',
		template: '<h2>首页信息</h2>',
		url: '/home'
	}).state('about', {
		url: '/about',
		template: '<h2>关于我们</h2>'
	}).state('product', {
		url: '/product',
		template: `
			<ul>
				<li><a ui-sref="product.phone" ui-sref-active="active">手机</a></li>
				<li><a ui-sref="product.compute" ui-sref-active="active">电脑</a></li>
				<li><a ui-sref="product.fashion" ui-sref-active="active">服饰</a></li>
				<li><a ui-sref="product.watch" ui-sref-active="active">手表</a></li>
			</ul>
			<div ui-view></div>
		`
	}).state('product.phone', {
		url: '/phone',
		template: '<h2>手机页</h2>'
	}).state('product.compute', {
		url:'/compute',
		template:'<h2>电脑页</h2>'
	}).state('product.fashion', {
		url:'/fashion',
		template:'<h2>服饰页</h2>'
	}).state('product.watch', {
		url:'/watch',
		template:'<h2>手表页</h2>'
	})
}])