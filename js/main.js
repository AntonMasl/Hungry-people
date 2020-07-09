$(function () {
    let mas = [];
    for (let i = 12; i < 22; i++) {
        mas[i] = `<option value="${i}">${i}:00</option>`;
    }
    for (let elem of mas) {
        $('.book__select_time').append(elem);
    }
    $('.header__arrow-transition').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#section-about').offset().top
        }, 800);
        return false;
    });
    $('.header__menu-btn').on('click', function () {
        $('.menu-dropdown').addClass('active');
        $('body').addClass('noscroll');
    });
    $('.menu-dropdown__close-btn').on('click', function () {
        $('.menu-dropdown').removeClass('active');
        $('body').removeClass('noscroll');
    });
});
