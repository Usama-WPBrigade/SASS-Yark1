var swiper = new Swiper(".logoSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 20,
      }, 
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },
    navigation: {
      nextEl: ".logo-slider-wrapper .swiper-button-next",
      prevEl: ".logo-slider-wrapper .swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    speed: 1000,
    effect: "fade",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    },

    mousewheel: true,
    keyboard: true
  });


  $(document).ready(function(){
    $("#menu-btn").click(function(){
      $(".navigation").slideToggle();
      $('body').toggleClass('overflow');
      $('.menu-btn').toggleClass('change')
    });

    $(window).scroll(function() {     
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $("#header").addClass("active-shadow");
      }
      else {
          $("#header").removeClass("active-shadow");
      }
  });


  })(jQuery);