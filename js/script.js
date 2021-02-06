$(function (){
//start scrolling  and backgroung navbar 
    $(window).scroll(function(){
        console.log('scroll');
        if($(this).scrollTop()>0){
            $('nav').addClass('black_background');
            $('nav').css('paddingTop','5px'),
            $('nav').css('paddingBottom','15px')
        }
        if($(this).scrollTop()===0){
            $('nav').removeClass('black_background');
            $('nav').css({
                paddingTop:'0',
                paddingBottom:'0',
                webkitTransition:'all .5s linear',
                mozTransition:'all .5s linear',
                Transition:'all .5s linear',
            })
        }
    })
// end scrolling backgroung navbar 

/****** start middel ************/
me();//auto work function
function me(){
  $('.middel .description ul li').each(function(){
    if($(this).hasClass('active')){
      $(this).delay(2000).animate({
        left:100,
        opacity:0
      },500,function(){
        $(this).removeClass('active').css({left:'0',opacity:'1'}).next().addClass('active')
        me();
        if($('.middel .description ul li.active').is(':last-child')){
            $('.middel .description ul li').eq(0).hide().delay(2500).fadeIn(1).addClass('active')
        }
      })
    }
  }); 
}
/****** end middel ************/



/****************************** start control bord ****/
$('.control .list_color li').on('click',function(){
    $('body').attr('data-main',$(this).data('color'));
  });

  $('.setting').on('click',function(){
    $(this).toggleClass('switch_right');
    if($(this).hasClass('switch_right')){
      $('.control').animate({
        right:-190
      },500)
    }else{
      $('.control').animate({
        right:0
      },500)
    }
  })
/******** start reset  */
$('.reset').on('click',function(){
  $('body').attr('data-main','yellow')
})
/******** end reset  */

/** start sun shin */
$('.sun').on('click',function(){
  $('body').addClass('add')
});
$('.moon').on('click',function(){
  $('body').removeClass('add')
})
/** end sun shin */
/****************************** end control bord ****/



//start certifications slid
var owl = $("#owl-demo");
owl.owlCarousel({
    items : 4, //5 items min-width 1000px and browser width
    itemsDesktop : [1000,4], //4 items between  901px and 1000px
    itemsDesktopSmall : [900,2], // betweem 601px and 900px  
    itemsTablet: [600,2], //2 items between 0 and  600
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});
///owl.trigger('owl.play',1000);// auto work

$(".next").click(function(){
  owl.trigger('owl.next');
})
$(".prev").click(function(){
  owl.trigger('owl.prev');
})
$(".play").click(function(){
  owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
})
$(".stop").click(function(){
  owl.trigger('owl.stop');
})
//end certifications slid


/************************************ start mixin  *******************/
$('.head ul li a').on('click',function(){
  $('.head ul li a').removeClass('active_link');
  $(this).addClass('active_link');
})
mixitup('.projects');
/************************************ end mixin  *******************/


/************************************ start projects  *******************/
$('.head ul li a').on('click',function(){
  $(this).addClass('active_P_a').parent('li').siblings().children('a').removeClass('active_P_a')
})
/************************************ end projects  *******************/







})