
$('form button').on('click',function(e){
    e.preventDefault();
    var form = $('[data-form-name="'+ $(this).data('form-name') +'"]');
    var phone = form.find('[name="phone"]');
    var mail = form.find('[name="mail"]');
    var name = form.find('[name="name"]');

    if(phone.val() == '' || name.val() == '' || mail.val() == ''){
        phone.addClass('required');
        name.addClass('required');
        mail.addClass('required');
        setTimeout(function(){
            phone.removeClass('required');
            name.removeClass('required');
            mail.removeClass('required');
        }, 2500);
    }
    else{
        $.ajax({
            url: "formManager.php",
            type: "POST",
            data:$(this).parent().serialize(),
            success: function(){
                //$('.modalForm').removeClass('modalHide');
                //$('.modal_form').hide();
                //$('.sended').show();

                $('.modal').addClass('hidden');
                $('.modal>div:not(.layout)').addClass('hidden');
                $('form input').val('');
            }
        })
    }
});

//// Валидатор
$('[name="name"]').on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^A-Za-zА-Яа-яЁё]/g.exec(that.value);
        that.value = that.value.replace(res, '');
    }, 0);
});
$('.phone').inputmask("+7(999)9999999");


//// плавная прокрутка по странице
var navList = $('.nav-link');
var navigationPanel = $('.navigation');
var scrollDuration = 600;

navList.on('click', function(e){
    $('.menu-btn').toggleClass('active');
    var position = $(this).index();
    e.preventDefault();
    $('body, html').animate({
        scrollTop: $('.anchor'+ position +'').offset().top
    },scrollDuration);
});





//// скрипт закрывающий форму
$('[data-btn-type="close"]').click(function(e){
    $('.modal').addClass('hidden');
    $('.modal>div:not(.layout)').addClass('hidden');
});
//// скрипт открывающий форму
$('[data-modal]').on('click', function(){
    $('.modal').removeClass('hidden');
    $($(this).data('modal')).removeClass('hidden')
});

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

//// Галерея на слайдере
$('.zoom').fancybox();

//// Определяет заполнен инпут или нет для анимации
$('.input-body .input').on('blur', function(){
    var self = $(this);

    if(self.val() !== ''){
        self.addClass('entered');
    }
    else{
        self.removeClass('entered');
    }
});

$('.menu-btn').on('click', function(){
    $(this).toggleClass('active');
});