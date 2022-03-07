(() => {
    $('.filters__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.filters__inner').find('.filters__content-item').removeClass('active-tab').hide();
        $('.filters__tabs').find('.filters__tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

})();
