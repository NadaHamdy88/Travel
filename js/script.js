$(document).ready(function(){
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
       
    });

    $('.drop').click(function(){
        $('.dropdown').slideToggle()
    });
  //owl carousel >> testimonial section
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//popup video in experience  section
$('.pop').magnificPopup({
    type: 'iframe'
});

    
});