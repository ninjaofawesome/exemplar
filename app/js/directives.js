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

exemplarDirectives.directive('stickyFooter', function(){
  return{
    restrict: 'E',
    templateUrl: 'app/views/components/footer.html',
    controller: function(){


    }
  }
});
exemplarDirectives.directive('myBackgroundImage', function () {
  return function (scope, element, attrs) {
    element.css({
      'background-image': 'url(' + attrs.myBackgroundImage + ')',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-position': 'center center fixed'
    });
  };
});





