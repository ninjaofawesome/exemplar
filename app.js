'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ExemplarControllers',
  'exemplarDirectives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/main.html',
    controller: 'MainCtrl'
  })
  .when('/read', {
    templateUrl: 'app/views/read.html',
    controller: 'ReadCtrl'
  })
  .when('/think', {
    templateUrl: 'app/views/think.html',
    controller: 'ThinkCtrl'
  })
  .when('/try', {
    templateUrl: 'app/views/try.html',
    controller: 'TryCtrl'
  })
  .when('/connect', {
    templateUrl: 'app/views/connect.html',
    controller: 'ConnectCtrl'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/contact', {
    templateUrl: 'app/views/contact.html',
    controller: 'ContactCtrl'
  })
  .when('/styles', {
    templateUrl: 'app/views/styles.html',
    controller: 'StyleCtrl'
  })
  .otherwise({redirectTo: '/'});
}]);
