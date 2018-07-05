'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider.when('/home', {
    templateUrl: 'html/home.html'
  });
}]);
