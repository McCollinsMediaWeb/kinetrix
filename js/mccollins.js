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

          jQuery(".popup2-trigger").click(function () {
            console.log($(this).children(".ServiceItemT3").text());
            jQuery("body").toggleClass("Popup2active");
            jQuery(".p2HeadText").text($(this).children(".ServiceItemT2").text());
            jQuery(".p2mainContent").text($(this).children(".ServiceItemT3").text());
          });
          jQuery(".OverLay2").click(function () {
            jQuery("body").toggleClass("Popup2active");
            jQuery(".p2HeadText").text("Read More Content Looking Empty");
            jQuery(".p2mainContent").text($(this).data("Please click on any Read More Button"));
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