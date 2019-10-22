const counter = (function () {
    let counterValue = 0;

    return {
        increment() {
            console.log(counter);
        },

        get value() {
            return counterValue;
        },
        set value(value) {
            counterValue = value;
        }
    };
})();

counter.value = 3;