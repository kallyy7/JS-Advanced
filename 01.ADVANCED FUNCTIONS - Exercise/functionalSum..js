let sum = (function () {
    let sum = 0;

    return function add(num) {
        sum += num;
        add.toString = function () {
            return sum
        };
        return add
    }

})();
console.log(sum(1)(2)(100).toString());