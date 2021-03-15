$(document).ready(function() {
    "use strict";
    // Start Slider
    var upper = $(".upper").innerHeight(),
        mynavbar = $(".mynavbar").innerHeight(),
        windowHeight = $(window).height(),
        sliderHeight;
    sliderHeight = windowHeight - (upper + mynavbar);
    $(".slider, .carousel-item").height(sliderHeight);
    
    $(window).resize(function () {
        $(".slider, .carousel-item").height(sliderHeight);
    });

    // End Slider

    // Start Show And Hide Search Bar
    $(".mynavbar .show_search").click(function () {
        $(".search").slideDown();
        $(this).fadeOut();
    });
    $(".search .hide ").click(function () {
        $(".search").slideUp();
        $(".mynavbar .show_search").fadeIn();
    });
    // End Show And Hide Search Bar

    /* Start trigger isotope jquery plugins */
    var container = $(".contents");
    container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $(".projects .list li").click(function () {
        $(this).addClass('active').siblings().removeClass("active");
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
    /* End trigger isotope jquery plugins */

    /* Start Trigger  magnific-popup js pluging  */
    $('.projects .contents .over-content').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		}
    });

    /* End Trigger  magnific-popup js pluging  */

    /* Start Trigger Counter UP Jquery Plugin */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    /* End Trigger Counter UP Jquery Plugin */

    /* Start  trigger owl carousel js plugin */
    $('#testimonials').owlCarousel({
        loop:true,
        items:1,
        margin:10,
        nav:true,
        touchDrag: true,
        dots: false
    });

    $('#clients').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2,
                margin: 120
            },
            768: {
                items: 2,
                margin: 240
            },
            992: {
                items: 3,
                margin: 180
            },
            1200: {
                items: 4,
                margin: 130
            }
        }
    });

    /* End  trigger owl carousel js plugin */

    
    var scrolling = $(".scroll .fas");
    $(window).scroll(function () {
        /* Start Show and Hide Scroll Button */
        if ($(this).scrollTop() >= 400) {
            scrolling.fadeIn();
        } else {
            scrolling.fadeOut();
        }
        /* End Show and Hide Scroll Button */

        /* Start Adding Box Shadow to Mynavbar on Scrolling   */
        if ($(this).scrollTop() >= sliderHeight) {
            $(".mynavbar").css({
                "box-shadow": "2px 2px 5px #eee"
            });
        } else {
            $(".mynavbar").css({
                "box-shadow": "none"
            });
        }
        /* End Adding Box Shadow to Mynavbar on Scrolling   */
    });

    /* Start Making Scroll To Top */
    scrolling.click(function () {
        $("html, body").animate({scrollTop:0}, 1000);
    });
    /* End Making Scroll To Top */
    
    
    /* Start Nice Scroll */
    $("body").niceScroll({
        cursorcolor:"#86bc42",
        zindex: 9999
    });
    /* End  Nice Scroll */

    /* Start change color */
    $(".choose-color .colors li").click(function () {
        $("link[href*='themeColor']").attr("href",$(this).data('value'));
        
    });
    /* End Change Color */
    
    
});