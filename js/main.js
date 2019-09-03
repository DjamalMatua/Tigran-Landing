
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top + (-20)
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
//////
