(function () {
    let burger = document.querySelector('.burger');
    let mobileMenu = document.querySelector('.burger-menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        mobileMenu.classList.toggle("is-open");
    });
    mobileMenu.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        mobileMenu.classList.toggle("is-open");
    });
}());

let helpers = {
    addZeros: function (n) {
        return (n < 10) ?  n : '' + n;
    }
};

function sliderInit() {
    let $slider = $('.slider-body');
    $slider.each(function() {
        let $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            centerMode: true,
            variableWidth: true,
            adaptiveHeight: true,
            prevArrow: '.slider-prev',
            nextArrow: '.slider-next',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        adaptiveHeight: true
                    }
                }
            ]
        });

        if ($(this).find('.slider-item').length > 1) {
            $(this).siblings('.slides-numbers').show();
        }

        $(this).on('afterChange', function(event, slick, currentSlide){
            $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });

        let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

    });
};

sliderInit();
