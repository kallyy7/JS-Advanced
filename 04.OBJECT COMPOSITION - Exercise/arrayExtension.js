(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function (p) {
        return this.reduce((a, b) => a + b, 0);
    }

    Array.prototype.average = function (p) {
        return this.sum() / this.length;
    }
})();