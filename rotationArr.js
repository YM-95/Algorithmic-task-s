function data(arr) {
    let step = arr.pop()
    for (let i = 0; i < step; i++) {
        let current = arr.pop();
        arr.unshift(current);


    }
    console.log(arr.join(' '));
}

data(['1', '2', '3', '4', '2'])