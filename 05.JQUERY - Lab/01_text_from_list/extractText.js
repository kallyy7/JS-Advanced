function extractText() {
    let input = $('#items li')
        .toArray()
        .map(a => a.textContent)
        .join();

    $('#result').text(input)
}