function data(arr) {

    let reg = /(?<!\d)[+]359([-])2\1\d{3}\1\d{4}\b/g;
    let arrs = [];

    while (valid = reg.exec(arr) !== null) {
        arrs.push(valid[0])
    }
    console.log(arrs.join(', '));
}



data(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
])