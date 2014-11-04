var exemplarDirectives = angular.module('exemplarDirectives', []);

exemplarDirectives.directive('sideNav', function(){
  return{
    restrict: 'E',
    templateUrl: 'app/views/components/sidebar.html',
    controller: function(){

    }
  }
});

