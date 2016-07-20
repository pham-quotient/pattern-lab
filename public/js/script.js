/**
 * Created by hpham on 7/19/16.
 */
// Can also be used with $(document).ready()
(function($) {
    if ($('.flexslider').length) {
        $(window).load(function () {
            $('.flexslider').flexslider({
                animation: "slide",
                animationLoop: true,
                animationSpeed: 600,
                controlsContainer: ".flex-control-nav-container",
                directionNav: true,
                controlNav: false,
                // easing: "swing"
                selector: ".slides > li",
                slideshow: true,
                pausePlay: true,               //Boolean: Create pause/play dynamic element
                pauseText: '<span>Pause</span>',             //String: Set the text for the "pause" pausePlay item
                playText: '<span>Play</span>',
                slideshowSpeed: "7000",
                nextText: "<span>Next</span>",
                prevText: "<span>Previous</span>"
            });
        });
    }

}(jQuery));