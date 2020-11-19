$(document).ready(function() {

    $('.search').click(function () { 
        $('.search_block').fadeToggle();
    });

    $('.carousel_galleru').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/right-chevron1.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right-chevron1.svg"></button>',
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });

});