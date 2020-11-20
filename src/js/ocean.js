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
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                prevArrow: false,
                nextArrow: false,
                slidesToShow: 1
              }
            }]
    });

    //меню гамбургер
    function showMenu() {
        $('.menu_wrap').slideToggle();
        $('.bg').slideToggle();
    }

    $('.hamburger').click(showMenu);
    $('.bg').click(showMenu);

});