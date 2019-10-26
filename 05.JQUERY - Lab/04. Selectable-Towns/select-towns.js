function attachEvents() {
    let towns = [];
    $('#items').on('click', 'li', function () {
        towns.push(this.textContent);
        $(this).css('background', '#DDDDDD');
    })

    $('#showTownsButton').on('click', function () {
        $('#selectedTowns').textContent = towns.join(', ');
        $('li').css('background', '');
        towns = [];
    })
}