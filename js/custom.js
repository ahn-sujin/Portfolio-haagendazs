$(function () {

    var win_w = $(window).width();

    $(window).on('resize',function(){
        win_w = $(this).width();
    });

/*---------gnb menu------------------------------------------------------*/ 
    $('#gnb').on('mouseenter',function(){
        if(win_w >= 980){
            $('.sub_menu').stop(true,true).slideDown();
            $('.bgGnb').stop(true,true).slideDown();
            $('.bgGnb').addClass('on');

        } else{

        }
    });

    $('.bgGnb').on('mouseleave',function(){
        if(win_w >= 980){
            $('.sub_menu').stop(true,true).slideUp();
            $('.bgGnb').stop(true,true).slideUp();
        }
    });






/*---------flavor------------------------------------------------------*/      
    var mySwiper = new Swiper('#flavor .left_box', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var mySwiper = new Swiper('#flavor .right_box', {
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: '#flavor .swiper-button-next',
            prevEl: '#flavor .swiper-button-prev',
        },
    });


/*---------icecream------------------------------------------------------*/  
    //isotope 
    $('.grid').isotope({
        itemSelector: '.icecream_item',
    });

    // filter items on button click
    $('.btn_list > li').on('click', function (e) {

        e.preventDefault();

        var filterValue = $(this).children().attr('data-filter');

        $('.grid').isotope({
            filter: filterValue
        });
        $(this).addClass('on').siblings().removeClass('on');

    });







});