$(function () {
    const inWrap = $('.inner-wrapper');
    let currentSlide = 1;

    function slideNext() {
        if (currentSlide >= 3) {
            currentSlide = 1;
        } else {
            currentSlide++;
        }

        if (currentSlide === 1) {
            $('.carousel-title-three').fadeOut(() => {
                $('.carousel-title-two').hide();
                $('.carousel-title-one').fadeIn();
            });
        }
        if (currentSlide === 2) {
            $('.carousel-title-one').fadeOut(() => {
                $('.carousel-title-three').hide();
                $('.carousel-title-two').fadeIn();
            });
        }
        if (currentSlide === 3) {
            $('.carousel-title-two').fadeOut(() => {
                $('.carousel-title-one').hide();
                $('.carousel-title-three').fadeIn();
            });
        }

        inWrap.animate({ left: '-200%' }, 400, function () {
            inWrap.css('left', '-100%');
            $('.slide').last().after($('.slide').first());
        });
    }

    function slidePrev() {
        if (currentSlide <= 1) {
            currentSlide = 3;
        } else {
            currentSlide--;
        }

        if (currentSlide === 1) {
            $('.carousel-title-two').fadeOut(() => {
                $('.carousel-title-three').hide();
                $('.carousel-title-one').fadeIn();
            });
        }
        if (currentSlide === 2) {
            $('.carousel-title-three').fadeOut(() => {
                $('.carousel-title-one').hide();
                $('.carousel-title-two').fadeIn();
            });
        }
        if (currentSlide === 3) {
            $('.carousel-title-one').fadeOut(() => {
                $('.carousel-title-two').hide();
                $('.carousel-title-three').fadeIn();
            });
        }

        inWrap.animate({ left: '0%' }, 400, function () {
            inWrap.css('left', '-100%');
            $('.slide').first().before($('.slide').last());
        });
    }

    sliderInterval = setInterval(slideNext, 6000);

    $('.prev').on('click', function () {
        clearInterval(sliderInterval);
        slidePrev();
    });

    $('.next').on('click', function () {
        clearInterval(sliderInterval);
        slideNext();
    });
});