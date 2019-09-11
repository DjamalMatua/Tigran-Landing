
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top + (0)
    }, 600);
    return false;
});
/////

$(document).ready(function () {
    $(".sidebar-menu-btn").click(function () {
        $(".side-bar").toggleClass("active");
    });

    $(".menu-item").click(function(){
        $(".side-bar").removeClass("active");
        $(".hamRotate").removeClass("active");
    })
});
////
$('.over-numb').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});







