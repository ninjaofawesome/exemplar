'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/styles', {
    templateUrl: 'views/styles.html',
    controller: 'StylesCtrl'
  })
  .otherwise({redirectTo: '/view1'});
}]);
