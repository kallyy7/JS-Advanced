function attachEvents() {
    $('a').on('click', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected')
        } else {
            $(this).addClass('selected');
        }
    })
}