function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);

    if (symbolFirst) {
        return symbol + ' ' + result;
    }

    return result + ' ' + symbol;
}

function GetDollarFormater(currencyFormatter) {
    function dollarFormatter(value) {
        currencyFormatter(',', '$', true, value);
    }

    return dollarFormatter;
}

let dollarFormatter = GetDollarFormater(currencyFormatter);
console.log(dollarFormatter(5345));