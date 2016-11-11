$(document).ready(function () {


    
//// index slider

    $('.slider-index').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        centerMode: true,
        centerPadding: '0px'
    });
    
    //// reviews slider

    $('.reviews-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots:true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });


//// slider-license-Novosib

    $('.slider-license-Novosib').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000
    });

    
//// slider-certificate-ISO

    $('.slider-certificate-ISO').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000
    });


//// slider-to-get-output

    $('.slider-to-get-output').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000
    });
    
    
//// галерея

    $('.zoom').fancybox();


//// Слайдер
    $('.s5 .slider').slick({
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    var requared = $('input[data-required]');
    var modal = '.modal';
    var navList = $('.nav-link');
    var navigationPanel = $('.navigation');
    var scrollDuration = 600;
    var form = $('form');
    
    requared.blur(function() {var self = $(this);if($(this).val().length == "") {self.addClass('input_error');setTimeout(function () {self.removeClass('input_error')}, 2000)}});
    requared.focus(function() {$(this).removeClass('input_error');});


    var close = function () {
        $(modal).addClass('hidden');
        $(modal + '>div:not(.layout)').addClass('hidden');
    };


    var open = function () {
        $(modal).removeClass('hidden');
        $($(this).data('modal')).removeClass('hidden')
    };


    form.submit(function(e){
        e.preventDefault();
        var self = $(this);
        var requared = true;
        var inputs = self.find('[data-required]');

        $('[name="frm-name"]').val(self.attr('name'));

        for(var i = 0; i < inputs.length; i++){
            if(inputs.eq(i).val() == '') {
                requared = false;
            }
        }
        if(requared){
            var type = self.attr('method');
            var url = self.attr('action');
            var data = self.serialize();
            $.ajax({type: type, url: url, data: data,
                success : function(){
                    $('form input').val('');
                    console.log('Success');
                }
            });
        }
        else{
            for(var i = 0; i < inputs.length; i++){
                if(inputs.eq(i).val() == '') {
                    inputs.eq(i).addClass('input_error');
                    setTimeout(function () {
                        inputs.removeClass('input_error');
                    }, 2000);
                }
            }
        }
    });


//// скрипт закрывающий форму
    $('[data-btn-type="close"]').on('click', close);

//// скрипт открывающий форму
    $('[data-modal]').on('click', open);


//// плавная прокрутка по странице
    navList.on('click', function(e){
        $('.menu-btn').toggleClass('active');
        var position = $(this).index();
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.anchor'+ position +'').offset().top
        },scrollDuration);
    });


//// Слайдер
    $('.slider').slick({
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

//// Галерея на слайдере
    $('.zoom').fancybox();

//// Определяет заполнен инпут или нет для анимации
// $('.input-body .input').on('blur', function(){
//     var self = $(this);
//
//     if(self.val() !== ''){
//         self.addClass('entered');
//     }
//     else{
//         self.removeClass('entered');
//     }
// });

    $('[data-toggle]').on('click', function(){
        var data = $(this).data('toggle');
        $(this).toggleClass(data);
    });

    if($('.step-form')){
        $('.progress-bar').each(function () {
            var data = $(this).data('progress');
            $(this).find('.line').width(data + '%');

            if(data == 100){
                $(this).addClass('progress-bar__white')
            }
        });

        var nextStep = function () {
            $('.step').addClass('hidden');
            step++;
            $('[data-step="'+ step +'"]').removeClass('hidden');
        };

        var prevStep = function () {
            $('.step').addClass('hidden');
            step--;
            $('[data-step="'+ step +'"]').removeClass('hidden');
        };

        var step = 0;
        var result = [];
        $('.step .btn').on('click', function () {
            nextStep();
            result[step] = $(this).data('value');

            $('.step [name="result"]').val(result);
            $('.result-heading').html('');
            $('.result-row').html('');
            result.forEach(function (item, i) {
                // $('.result-table td').eq(i-1).text(item);

                $('.result-heading').append('<th>' + $('[data-step="'+ (i-1) +'"]').find('.step-form_heading').text() + '</th>');
                $('.result-row').append('<td>' + item + '</td>');
            });
        });

        $('.step .btn-prev').on('click', prevStep);
        $('.step .btn-next').on('click', nextStep);
    }

});