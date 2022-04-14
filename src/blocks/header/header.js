import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {
    let $menu = $('.menu');
    let $toggle = $('.menu__icon');

    $('.menu__icon').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('opened');
        $menu.toggleClass('opened');

        if ($menu.hasClass('opened')) {
            disablePageScroll();
            return;
        }
        enablePageScroll();
    });

    $(window).on('click', function (e) {
        if ($menu.hasClass('opened') && !e.target.closest('.menu')) {
            e.preventDefault();
            $toggle.removeClass('opened');
            $menu.removeClass('opened');
            enablePageScroll();
        }
    });

    $('.menu, .footer__menu').on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        let $element = $($(this).attr('href'));

        $('html, body').animate({ scrollTop: $element.offset().top, }, "slow", function () {
            $toggle.removeClass('opened');
            $menu.removeClass('opened');
            enablePageScroll();
        });
    });

})();
