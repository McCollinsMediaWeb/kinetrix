$(document).ready(
    function(){
        windowHeight = jQuery(window).innerHeight();
        HeaderHeight = jQuery("header").innerHeight();
        jQuery('.mainbannerImg').css('height', (windowHeight-HeaderHeight)+'px');
      
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
            dots: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    centerMode: true
                  }
                }
            ]
          });
          $('.TestimonialSlick').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,
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