$(document).ready(function() {

  var nav = $("#nav-bar");

  $(window).scroll(function() {
    var originalHeight = nav.outerHeight(true);
    var scrollTopVal = $(this).scrollTop();
    
    if (scrollTopVal > originalHeight + 130) {
      nav.css("position", "fixed");
      nav.css("top", "0");
    } else {
      nav.css("position", "relative");
    }
  })

});