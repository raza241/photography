$(window).on("load", function () {
    $(".preloader").fadeOut();
    new WOW().init();
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".fixed-top").addClass("scroll");
    }
    else {
        $(".fixed-top").removeClass("scroll");
    }
});
$(document).ready(function () {
    $("#bt-togglethumbnails").click(function () {
        $(".nav-menu").toggleClass('move-nav');

    });
    $(".nav-btn").click(function () {
        $(".mobile-nav").toggle();
    });
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    $('.testimonial_slider').slick({
        dots: true,
        arrows: false
    });
    $('.pogoSlider').pogoSlider({
        autoplay: false,
        generateButtons: true,
        buttonPosition: 'CenterHorizontal',
        generateNav: false,
        slideTransition: 'fade',
    }).data('plugin_pogoSlider');
});
function slickSlider() {
    var _status = jQuery('.tg-bannerfullwidthslidecount');
    var _slider = jQuery('.tg-postfullslider');
    _slider.on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        _status.html("<span>" + i + "</span><span>" + slick.slideCount + "</span>");
    });
    _slider.slick({
        fade: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.tg-postthumbnail',
    });
    jQuery('.tg-postthumbnail').slick({
        dots: false,
        arrows: true,
        horizantol: true,
        infinite: true,
        slidesToShow: 5,
        centerMode: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: _slider,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    jQuery('.bt-togglethumbnails').on('click', function () {
        jQuery('body.bt-homevfive').toggleClass('bt-hidethumbnail');
    });
}
// jQuery(function () {
//     $('.selectpicker').selectpicker();
// });

slickSlider();