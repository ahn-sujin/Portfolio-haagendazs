$(function () {

    var win_w = $(window).width();

    $(window).on('resize',function(){
        win_w = $(this).width();
        if(win_w >= 980){
            $('.gnb_wrap').removeAttr('style');
            $('.sub_menu').removeAttr('style');
            $('.toggle').removeAttr('style');
            $('.cancle').removeAttr('style');
        }

    });

/*---------scroll motion------------------------------------------------------*/ 
    var last = 0;
    var sec_pos = [];
    var base_line = -500;

    $('section').each(function(){ //반복실행
        var this_offset = $(this).offset().top;
        sec_pos.push(this_offset);// 현재 위치 값을 배열변수 마지막에 추가 
    });

    last =$('section').last().offset().top +$('section').last().height();
    sec_pos.push(last);

    //스크롤 모션 
    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();

        $('section').each(function(index){
            if(scroll >= sec_pos[index] + base_line && scroll < sec_pos[index+1]){
                $('section').removeClass('on').eq(index).addClass('on');
            } 
        });

        if($(this).scrollTop() > 500){
            $('#top_button').addClass('on');
        } else {
            $('#top_button').removeClass('on');
        }

    });

    $('#top_button').on('click',function(){
        $('html. body').animate({scrollTop:0},500);
        return false;
    });




/*---------gnb menu------------------------------------------------------*/ 
    $('#gnb').on('mouseenter',function(){
        if(win_w >= 980){
            $('.sub_menu').addClass('on');
            $('.bgGnb').addClass('on');
            $('.gnb_wrap').addClass('on');

        } else{
            $('#gnb>li>a').off('click');
            $('#gnb>li>a').on('click',function(){
                $('.sub_menu').stop().slideUp();
                $(this).next('.sub_menu').stop().slideToggle();
                $(this).parents().addClass('on').siblings().removeClass('on');
                
            });
        }
    });

    $('.bgGnb').on('mouseleave',function(){
        if(win_w >= 980){
            $('.sub_menu').removeClass('on');
            $('.bgGnb').removeClass('on');
            $('.gnb_wrap').removeClass('on');
        }
    });

    $('#header .toggle').on('click',function(){
        $('.nav_wrap').addClass('on');
        $('.toggle').addClass('on');
        $('.cancle').addClass('on');
//        $('.').hide();
        
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
            el: '#visual .swiper-pagination',
        },
        navigation: {
            nextEl: '#visual .swiper-button-next',
            prevEl: '#visual .swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        }, 
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
        $('.pannel>li').eq(i).addClass('on').siblings().removeClass('on');
    });

    $('.menu>li').first().trigger('click')    



});