function solve() {
    let typeCount = {};

    for (const arg of arguments) {
        let type = typeof (arg);

        if (type === 'object') {
            console.log(`${type}: `);

        } else {
            console.log(`${type}: ${arg}`);
        }
        if (typeCount[type]) {
            typeCount[type]++;
        } else {
            typeCount[type] = 1;
        }
    }

    typeCount = Object.entries(typeCount)
        .sort((a, b) => {
            return b[1] - a[1]
        }).forEach(element => {
            console.log(`${element[0]} = ${element[1]}`);

        });
}