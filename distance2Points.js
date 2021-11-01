function data(x1, y1, x2, y2) {

    let x = x1 - x2
    let y = y1 - y2
    let distance = Math.sqrt(x * x + y * y)

    console.log(distance);

}

data(2, 4, 5, 0)