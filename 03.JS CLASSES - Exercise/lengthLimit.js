class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        let output = this.innerString;

        if (this.innerLength === 0) {
            output = '...';
        } else if (this.innerLength.length > this.innerLength) {
            let cutedStr = this.innerString.length - this.innerLength;
            output = this.innerString.substring(0, cutedStr);
            output += '...';
        }
        return output;
    }
}