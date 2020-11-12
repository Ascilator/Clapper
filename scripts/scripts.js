jQuery(function () {
    var slider = $('.slider_body');
    var sliderIsLive = false;

    var slider_com_body = $('.slider_com_body');
    var slider_com_bodyIsLive;

    var slider_spec_body = $('.slider_spec_body');
    var slider_spec_bodyIsLive;

    var video = $('.video_intsr')[0];

    $(window).resize(function () {
        if ($('html').width() > 778) {
            if (sliderIsLive === true) {
                slider.slick('unslick');
                sliderIsLive = false;
            }

        } else {
            if (sliderIsLive === false) {
                slider.slick({
                    infinite: false,
                    rows: 0,
                    speed: 300,
                    easing: 'ease',
                    waitForAnimate: false,
                    touchMove: true,
                    touchTreshhold: 50,
                    slidesToShow: 1,
                    slideToScroll: 1,
                    nextArrow: $('.slider_card_next'),
                    prevArrow: $('.slider_card_prev'),
                    variableWidth: true,
                    centerMode: true,
                    //autoplay: true,
                });
                sliderIsLive = true;


            }
        }

    });

    if ($('html').width() < 778) {
        slider.slick({
            infinite: false,
            rows: 0,
            speed: 300,
            easing: 'ease',
            waitForAnimate: false,
            touchMove: true,
            touchTreshhold: 50,
            slidesToShow: 1,
            slideToScroll: 1,
            variableWidth: true,
            centerMode: true,
            nextArrow: $('.slider_card_next'),
            prevArrow: $('.slider_card_prev'),
            //autoplay: true,
        });
        sliderIsLive = true
    }



    slider_com_body.slick({
        infinite: false,
        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: false,
        touchMove: true,
        touchTreshhold: 50,
        slidesToShow: 3,
        slideToScroll: 1,
        //variableWidth: true,
        vertical: false,
        nextArrow: $('.slider_com_next'),
        prevArrow: $('.slider_com_prev'),
        //autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: true,
                    slidesToShow: 3,
                }
            },
        ]
    });


    slider_spec_body.slick({
        infinite: false,
        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: false,
        touchMove: true,
        touchTreshhold: 50,
        slidesToShow: 5,
        slideToScroll: 1,
        //variableWidth: true,

        nextArrow: $('.slider_spec_next'),
        prevArrow: $('.slider_spec_prev'),
        //autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    variableWidth: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    variableWidth: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 786,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            },

        ]
    });



    $('.play_btn').click(function () {

        if (video.paused) {
            video.play();
            $('.play_btn').addClass('_active');
        } else {
            video.pause()
        }
    });

    $('.video_intsr').click(function () {
        video.pause();
        $('.play_btn').removeClass('_active');
    });


    $('.burger').click(function () {
        $(this).toggleClass('_active');
        $('.menu').toggleClass('_active');
        $('body').toggleClass('_lock')
    })
    $(window).resize(function () {
        if ($('html').width() < 500) {
            $('.menu').append($('.enter_or_log'));
        } else {
            $('.enter_or_log').insertAfter($('.menu'));
        }
    });
    if ($('html').width() < 500) {
        $('.menu').append($('.enter_or_log'));
    }
    $(window).scroll(function () {
        var header = $('.header');
        if (window.pageYOffset > 70) {
            header.addClass('header_white');
        } else {
            header.removeClass('header_white');
        }

    });
});


