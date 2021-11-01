function solve(arr) {

    let list = arr.shift().split(' | ')

    for (let token of arr) {

        let tokens = token.split(' ')

        if (token == 'Stop!') {
            console.log(list.join(' '));
            break;
        }
        if (tokens[0] == 'Join') {
            if (list.includes(tokens[1]) == false) {
                list.push(tokens[1])
            }
        }
        if (tokens[0] == 'Drop') {
            if (list.includes(tokens[1]) == true) {
                let index = list.indexOf(tokens[1])
                list.splice(index, 1)
            }
        }
        if (tokens[0] == 'Replace') {
            let index = list.indexOf(tokens[1]);
            if (list.includes(tokens[1]) == true) {
                list.splice(index, 1, tokens[2])
            }
        }
    }

}

solve(["Romance | Fiction | Horror | Mystery",
    "Drop Romance",
    "Join Fantasy",
    "Stop!"])

solve(["Poetry | Romance",
    "Drop Children",
    "Replace Fantasy Crime",
    "Stop!"])

solve(["Thriller | Young | Crime",
    "Join Political",
    "Replace Young Fairytale",
    "Stop!"])