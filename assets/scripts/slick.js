$(function () {
    $('.carousel-banner').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true
    });

    $('.carousel-before-and-after').slick({
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    })

    $('.carousel-videos').slick({
    })
});

$(window).on('load resize orientationchange', function () {
    $('.carousel-cards').each(function () {
        let $carousel = $(this);

        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }

        else {
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    dots: false,
                    arrows: true,
                    speed: 400,
                    fade: true
                });
            }
        }
    })

    $('.carousel-topics').each(function () {
        let $carousel = $(this);

        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }

        else {
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    dots: true,
                    arrows: false,
                    speed: 400,
                    fade: true
                });
            }
        }
    })

    $('.carousel-box-cards').each(function () {
        let $carousel = $(this);

        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }

        else {
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    fade: true
                });
            }
        }
    })

    $('.carousel-steps').each(function () {
        let $carousel = $(this);

        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }

        else {
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    fade: true
                });
            }
        }
    })

    $('.carousel-articles').each(function () {
        let $carousel = $(this);

        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }

        else {
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    fade: true
                });
            }
        }
    })   

})