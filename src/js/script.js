$(document).ready(function() {


    //показ поиска
    $('.search').click(function () { 
        $('.search_block').fadeToggle();
    });

    // анимация перехода первого экрана

    function prev(event) { 
        let target = event.target;

        $('.switch_item').removeClass('switch_item-active');
        $(target).addClass('switch_item-active');

        if($('.switch_item')[1].classList.contains('switch_item-active')) {

            $('.promo_text').fadeOut(1500);
            $('.promo_text-slide').fadeIn(1500);
            $('promo_text-slide').removeClass('pos');

            $('.promo_img_item').css('display', 'none');
            $('.promo_img_item-slide').fadeIn(1000);
            $('.promo_img_item-slide').removeClass('pos');

        } else {
            
            $('.promo_text').fadeIn(1000);
            $('.promo_text-slide').fadeOut(1000);
            $('promo_text-slide').addClass('pos');

            $('.promo_img_item').fadeIn(1000);
            $('.promo_img_item-slide').fadeOut();
            $('.promo_img_item-slide').addClass('pos');
        }
    }

    // setInterval(prev, 2000);

    $('.switch_item').click(prev);


    // табы на втором экране
    $('ul.tabs').on('click', 'li:not(.tab_active)', function() {
        $(this)
          .addClass('tab_active').siblings().removeClass('tab_active')
          .closest('div.container').find('div.content').removeClass('content_active').eq($(this).index()).addClass('content_active');
    });


    // кнопка Подробнее..
    $('.link_text').click(function() { 
        $('.content_item').toggleClass('content_item-active');
    });

    // карусель
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/right-chevron1.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right-chevron1.svg"></button>',
        dots: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                prevArrow: false,
                nextArrow: false
                
              }
            }]
    });

    //значения инпутов
    let area = document.getElementById('area'),
        areaValue = document.getElementsByClassName('area_value')[0],
        cost = document.getElementById('cost'),
        costValue = document.getElementsByClassName('cost_value')[0],
        rooms = document.getElementById('rooms'),
        roomsValue = document.getElementsByClassName('rooms_value')[0];

       
    area.addEventListener('input', function(){
        areaValue.textContent = this.value + ' кв м';
    });

    cost.addEventListener('input', function(){
        costValue.textContent = this.value;
    });

    rooms.addEventListener('input', function(){
        roomsValue.textContent = this.value;
    });

    //карусель галереи
    $('.carousel_galleru').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/right-chevron1.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right-chevron1.svg"></button>',
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                prevArrow: false,
                nextArrow: false,
                slidesToShow: 2,
                slidesToScroll: 2
               }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                prevArrow: false,
                nextArrow: false,
              }
            }]
    });


    //калькулятор
    let sum = document.getElementById('sum'),
        sumValue = document.getElementsByClassName('sum_value')[0],
        contribution = document.getElementById('contribution'),
        contributionValue = document.getElementsByClassName('contribution_value')[0],
        term = document.getElementById('term'),
        termValue = document.getElementsByClassName('term_value')[0],
        percent = document.getElementById('percent'),
        percentValue = document.getElementsByClassName('percent_value')[0],
        resultValue = document.getElementsByClassName('result_value')[0],
        button = document.getElementsByClassName('calc_btn')[0];


    //отображение значений на странице
    sum.addEventListener('input', function(){
        sumValue.textContent = this.value + ' руб';
    });

    contribution.addEventListener('input', function(){
        contributionValue.textContent = this.value + ' руб';
    });

    term.addEventListener('input', function(){
        termValue.textContent = this.value + ' лет';
    });

    percent.addEventListener('input', function(){
        percentValue.textContent = this.value + ' %';
    });


    //calc
    function calc(a, b, c, d){
        a = +sum.value;
        b = +contribution.value;
        c = +term.value;
        d = +percent.value;

        let f = a * (d/100),
            s = a + (f*c),
            g = s - b,
            result = g / (c*12);

        console.log(result);
        resultValue.textContent = Math.trunc(result) + ' руб';
    }
    
    button.addEventListener('click', function(){
        calc();
    });


    //меню гамбургер
    function showMenu() {
        $('.menu_wrap').slideToggle();
        $('.bg').slideToggle();
    }

    $('.hamburger').click(showMenu);
    $('.bg').click(showMenu);
    
});
