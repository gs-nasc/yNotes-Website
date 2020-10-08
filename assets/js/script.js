$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            $('.header').addClass('white');
        } else {
            $('.header').removeClass('white');
        }
    });
});
$(document).ready(function () {
    if ($(window).scrollTop() > 180) {
        $('.header').addClass('white');
    } else {
        $('.header').removeClass('white');
    }
});