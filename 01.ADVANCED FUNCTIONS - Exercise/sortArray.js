function sortArray(arr, sortMethod) {
    const ascComparator = function (a, b) {
        return a - b;
    }

    const descComparator = function (a, b) {
        return b - a;
    }

    let sortingTypes = {
        'asc': ascComparator,
        'desc': descComparator
    };

    return arr.sort(sortingTypes[sortMethod]);
}

console.log(sortArray([1, 2, 5, 3], 'asc'));