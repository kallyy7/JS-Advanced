function customNew(constructor, ...args) {
    let obj = {};

    Object.setPrototypeOf(obj, constructor.prototype);

    constructor.apply(obj, args);

    return obj;
}