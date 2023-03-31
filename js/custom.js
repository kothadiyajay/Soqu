$(document).ready(function(){

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
        
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });


     $('#featured-3').owlCarousel({
          loop:true,
          margin:30,
          nav:true,
          dots:false,
          autoplay:true,
          autoplayTimeout:2000,
        
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              700:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      })


     $('#logo').owlCarousel({
          loop:true,
          margin:30,
          nav:false,
          dots:false,
          autoplay:true,
          autoplayTimeout:2000,
        
          responsive:{
            0:{
                items: 1,
            },
            576:{
                items: 2,
            },
            768:{
                items: 3,
            },
            992:{
                items: 4,
            },
            1200:{
                items: 5,
            },
            1400:{
                items: 5,
            },
          }
      })


     $('#portfolio').owlCarousel({
          loop:true,
          margin:30,
          nav:true,
          dots:false,
          autoplay:true,
          autoplayTimeout:2000,
        
          responsive:{
            0:{
                items: 1,
            },
            576:{
                items: 1,
            },
            768:{
                items: 2,
            },
            992:{
                items: 3,
            },
            1200:{
                items: 4,
            },
            1400:{
                items: 4,
            },
          }
      })


     $('#team').owlCarousel({
          loop:true,
          margin:30,
          nav:true,
          dots:false,
          autoplay:true,
          autoplayTimeout:5000,
        
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              700:{
                  items:2
              },
              800:{
                  items:2
              },
              1000:{
                  items:4
              }
          }
      })
});