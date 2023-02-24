$(document).ready(
    function(){
        windowHeight = jQuery(window).innerHeight();
  
        jQuery('.mainbannerImg').css('height', (windowHeight)+'px');
      
        jQuery(window).scroll(function () {
          var scroll = jQuery(window).scrollTop();
      
          if (scroll >= 100) {
            jQuery("body").addClass("StickHeader");
          } else {
            jQuery("body").removeClass("StickHeader");
          }
        });
        jQuery(".CloseClick, .MenuClick , .menudrop ,.MenuActive1").click(function () {
            jQuery("body").toggleClass("ActivePanel");
          });
          jQuery(".OverLay , .openpopup , .Contactusnow").click(function () {
            jQuery("body").toggleClass("activeform");
            jQuery("body").removeClass("pop3active");
          });
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true
          });
          $('.TestimonialSlick').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
          });

        if (jQuery(window).width() < 1000) {
            jQuery(".ImageSwitcher")
            .fadeOut(400, function() {
              jQuery(this).attr('src',jQuery(this).attr('data-mobile'));
            })
            .fadeIn(400);
        }
        else {
          jQuery(".ImageSwitcher")
            .fadeOut(400, function() {
              jQuery(this).attr('src',jQuery(this).attr('data-desktop'));
            })
            .fadeIn(400);
        }
          
    }
);