function initializeTable() {
    $('#createLink').on('click', function () {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        if (capital && country !== '') {
            createCountry(country, capital);
        }
    });

    function createCountry(country, capital) {
        let table = $('#countriesTable');

        let row = $('<tr>')
            .append($(`<td>${country}</td>`))
            .append($(`<td>${capital}</td>`));

        let up = $('<a href = "#"> [Up] </a>');
        let down = $('<a href = "#"> [Down] </a>');
        let del = $('<a href = "#"> [Delete] </a>');

        let actions = $('<td>')
            .append(up).click(moveUp)
            .append(down).click(moveDown)
            .append(del).click(deleteRow);


        row.append(actions);
        table.append(row);
    }

    function moveUp() {
        let currentRow = $(this).parent();
        console.log('up')
        currentRow.insertBefore(currentRow.prev());
    }

    function moveDown() {
        let currentRow = $(this).parent();
        console.log('down');
        currentRow.insertAfter(currentRow.next());
    }

    function deleteRow() {
        let currentRow = $(this).parent();
        console.log('del')
        currentRow.remove();
    }

    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
}