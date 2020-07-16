$(window).on("load", function () {
    $(".preloader").addClass('complete');
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
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );
});

$(function () {
    $(".figimg").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".figimg:hidden").slice(0, 6).slideDown();
        if ($(".figimg:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});
function slickSlider() {
    var _status = jQuery('.tg-bannerfullwidthslidecount');
    var _slider = jQuery('#tg-postfullslider');
    _slider.on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        _status.html("<span>" + i + "</span><span>" + slick.slideCount + "</span>");
    });
    _slider.slick({
        fade: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '#tg-postthumbnail',
    });
    jQuery('#tg-postthumbnail').slick({
        dots: false,
        arrows: false,
        vertical: true,
        infinite: true,
        slidesToShow: 7,
        centerMode: true,
        slidesToScroll: 1,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: _slider,
    });
    jQuery('#bt-togglethumbnails').on('click', function () {
        jQuery('body.bt-homevfive').toggleClass('bt-hidethumbnail');
    });
}
slickSlider();