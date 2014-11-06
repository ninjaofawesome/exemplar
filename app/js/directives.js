var exemplarDirectives = angular.module('exemplarDirectives', []);

exemplarDirectives.directive('sideNav', function(){
  return{
    restrict: 'E',
    templateUrl: 'app/views/components/sidebar.html',
    controller: function(){
      $('.hamburger-button').click(function(){
        $(this).fadeOut(600, function () {
            $('.side-nav').animate({ left: 0});
        });
      });

      $('.close-me').click(function(){
        $('.side-nav').animate({left: '-=350'}, 600, function(){
            $('.hamburger-button').fadeIn(600);
        });
      });
    }
  }
});

