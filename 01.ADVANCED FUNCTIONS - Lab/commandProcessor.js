const input = [
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
];

const operations = {
    current: '',
    append: function (str) {
        this.current += str;
        return this;
    },
    removeStart: function (index) {
        this.current = this.current.slice(index);
        return this;
    },
    removeEnd: function (index) {
        this.current = this.current.slice(0, this.current.length - index);
        return this;
    },
    print: function () {
        console.log(this.current);
    },
    execute: function (input) {
        input.forEach((element) => {
            const parts = element.split(" ");
            this[parts[0]].call(this, parts[1]);
        });
    }
}

operations.execute(input);