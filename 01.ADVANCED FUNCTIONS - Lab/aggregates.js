function aggregates(arr) {
    let sum = arr.reduce((prev, curr) =>
        prev += curr, 0
    );

    let min = arr.reduce((prev, curr) =>
        prev = Math.min(prev, curr)
    );

    let max = arr.reduce((prev, curr) =>
        prev = Math.max(prev, curr)
    );

    let join = arr.reduce((prev, curr) =>
        prev = String(prev) + String(curr)
    )

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Join = ${join}`);
}

aggregates([5, -3, 20, 7, 0.5]);