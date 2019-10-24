function extractText() {
    let input = $('#items li')
        .toArray()
        .map(a => a.textContent)
        .join();

    $('#result').text(input)
}

$(function () {
    $('a').on('click', (event) => {
        alert('link forbidden');
        event.preventDefault();
    })
});