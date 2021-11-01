function solve(arr) {
    let sequent = arr.split(' ')
    let score = 0
    let newArr = []

    for (let key of sequent) {
        score += (Number(key))
    }
    let average = score / sequent.length
    for (let token of sequent) {
        if (token > average) {
            newArr.push(token)
            newArr.sort(function (a, b) { return b - a });
        }
    }
    let removed = newArr.slice(0, 5)
    if (removed.length > 0) {
        console.log(removed.join(' '))
    }
    if (sequent.length <= 1) {
        console.log('No');
    }

}

solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')
solve('10 20 30 40 50')
solve('1')
solve('-1 -2 -3 -4 -5 -6')