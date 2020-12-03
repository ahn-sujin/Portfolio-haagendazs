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
            $('#gnb>li').off('click');
            $('#gnb>li').on('click',function(){
                $(this).addClass('on');
                $('.sub_menu').stop().slideUp();
                $(this).children('.sub_menu').stop().slideToggle();
            });
        }
    });

    $('.bgGnb').on('mouseleave',function(){
        if(win_w >= 980){
            $('.sub_menu').stop(true,true).slideUp();
            $('.bgGnb').stop(true,true).slideUp();
        }
    });

    $('#header .toggle').on('click',function(){
        $('.nav_wrap').addClass('on');
        $('.toggle').addClass('on');
        $('.cancle').addClass('on');
        
    });

    $('#header .cancle').on('click',function(){
        $('.nav_wrap').removeClass('on');
        $('.toggle').removeClass('on');
        $('.cancle').removeClass('on');

    });

/*---------visual------------------------------------------------------*/ 
    var mySwiper = new Swiper('#visual .swiper-container', {
        loop: true,

        pagination: {
        el: '.swiper-pagination',
        },
    
        navigation: {
        nextEl: '#visual .swiper-button-next',
        prevEl: '#visual .swiper-button-prev',
        },

    })
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
        var filterValue = $(this).children().attr('data-filter');

        e.preventDefault();
        
        $('.grid').isotope({
            filter: filterValue
        });

        $(this).addClass('on').siblings().removeClass('on');
        $('.more').trigger('click'); // 메뉴 클릭할 때마다 more을 강제로 클릭하여, 그리드 wrap의 높이조정
    });

    //more 클릭할 때마다 - 그리드의 높이 구해서 자동조정
     $('.more').on('click',function(e){
         var grid_h = $('.grid').height();
         e.preventDefault();
         $('.grid_wrap').stop().animate({ height : grid_h },300);
         
    });
    
    
/*---------tab_menu------------------------------------------------------*/
    $('.menu>li').on('click',function(e){
        e.preventDefault();
        var i = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('.pannel>li').eq(i).fadeIn().siblings().fadeOut();
        $('.tab_pannel>li').eq(i).addClass('on').siblings().removeClass('on');
    });

    $('.menu>li').first().trigger('click')    



});