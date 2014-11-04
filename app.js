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
  .when('/styles', {
    templateUrl: 'app/views/styles.html',
    controller: 'StyleCtrl'
  })
  .otherwise({redirectTo: '/view1'});
}]);
