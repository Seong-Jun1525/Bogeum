$(document).ready(function(){
    $('#banner').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });
    $('#adoption .container').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });
});

$(window).scroll(function(){
    const scrollTop = $(window).scrollTop() + $(window).height() / 2;

    if(scrollTop > $("#intro").offset().top) {
        $("#intro").addClass("show");
    }
    if(scrollTop > $("#adoption").offset().top) {
        $("#adoption").addClass("show");
    }
});
