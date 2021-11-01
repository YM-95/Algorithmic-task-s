function solve(input) {

    let step = Number(input.pop())
    let now = []
    for (let i = 0; i < input.length; i += step) {
        now.push(input[i])
    }
    console.log(now.join(' '));
}

solve(['5', '20', '31', '4', '20', '2'])