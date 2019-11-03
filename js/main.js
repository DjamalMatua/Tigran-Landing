
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

//LOADMORE
$(document).ready(function(){
    $(".load-more").slice(0, 2).show();
    $("#loadMore").on('click', function(e){
        e.preventDefault();
        $(".load-more:hidden").slice(0, 2).slideDown();
    });
    $('#all').click(function () {
    });
});
//ACCORDION
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }



