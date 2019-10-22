const assert = require('chai').assert;

function subSum(arr, firstIndex, secIndex) {
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

    if (!arr.every(Number)) {
        return NaN;
    }

    return sum = arr
        .slice(firstIndex, secIndex + 1)
        .map(Number)
        .reduce((a, b) => a + b);
}

subSum([10, 20, 30, 40, 50, 60], 3, 300)
console.log(subSum([2, 3, "test"], -2, 100));
console.log(subSum([], -2, 100));

// test with mocha and chai
describe('subSum', function () {
    it('test', function () {
        // Arrange
        let arr = [];
        let firstIndex = -2;
        let secIndex = 100;
        // Act
        let result = subSum(arr, firstIndex, secIndex);
        //Assert
        assert.equal(result, 0);
    });
})