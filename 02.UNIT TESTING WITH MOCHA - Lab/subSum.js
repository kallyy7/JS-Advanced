function solve(arr, firstIndex, secIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (arr.length === 0) {
        return 0;
    }

    if (firstIndex < 0) {
        firstIndex = 0;
    }

    if (secIndex) {
        secIndex = arr.length;
    }

    if (!arr.every((i) => i instanceof Number)) {
        return NaN;
    }

    return sum = arr
        .slice(firstIndex, secIndex + 1)
        .map(Number)
        .reduce((a, b) => a + b);
}

solve([10, 20, 30, 40, 50, 60], 3, 300)
console.log(solve([2, 3, "test"], -2, 100));
console.log(solve([], -2, 100));