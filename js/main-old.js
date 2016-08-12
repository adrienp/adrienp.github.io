var HEADER_PARALLAX = 0.25;
var HEADER_NAV_FADE = 0.8;

var $ = jQuery;

$(function() {
  var $window = $(window);
  var $nav = $('.navbar');
  var $header = $('#header-jumbotron');
  var $header_background = $header.find('.jumbotron-background');

  function setupScroll() {
    var header_height = $header.innerHeight();
    var nav_height = $nav.innerHeight();
    var do_parallax = $header_background.is(':visible');

    $window.on('resize', function() {
      header_height = $header.innerHeight();
      do_parallax = $header_background.is(':visible');
    });

    function scrollHandler() {
      var scrollTop = $window.scrollTop();
      $nav.toggleClass('transparent', scrollTop < header_height - nav_height);

      if (do_parallax && scrollTop < header_height) {
        $header_background.css('transform', 'translate3d(0px,' + (scrollTop * HEADER_PARALLAX) + 'px,0px)');
      }
    }

    $window.on('scroll', function() {
      requestAnimationFrame(scrollHandler);
    });
    scrollHandler();
  }

  setupScroll();

  $('#projects').mixItUp();

  // {block:Permalink}
  // var $hero_img = $('.post img.hero').length ? $('.post img.hero') : $('.post img');
  // var hero_src = $hero_img.prop('src');
  //
  // if (hero_src) {
  //   $header.add($header_background).css('background', "url('" + hero_src + "') 50% 30% / cover");
  // }
  // {/block:Permalink}
});
