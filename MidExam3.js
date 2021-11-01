function solve(arr) {

    let list = arr.shift().split(':')
    let newList = []
    for (let token of arr) {
        let tokens = token.split(' ')
        if (token == 'Ready') {
            console.log(newList.join(' '));
            break;
        }
        if (tokens[0] == 'Add') {
            if (list.includes(tokens[1]) == false) {
                console.log("Card not found.");
            } else {
                newList.push(tokens[1])
            }
        }
        if (tokens[0] == 'Insert') {
            if (list.includes(tokens[1]) == false || tokens[2] < 0) {
                console.log("Error!");
            } else {
                newList.splice(tokens[2], 0, tokens[1])
            }
        }
        if (tokens[0] == 'Remove') {
            if (newList.includes(tokens[1]) == false) {
                console.log("Card not found.");
            } else {
                let index = newList.indexOf(tokens[1])
                newList.splice(index, 1)
            }
        }
        if (tokens[0] == 'Swap') {
            let index = newList.indexOf(tokens[1])
            let index1 = newList.indexOf(tokens[2])
            newList[index] = tokens[2]
            newList[index1] = tokens[1]
        }
        if (tokens[0] == 'Shuffle') {
            newList.reverse()
        }
    }
}

// solve((["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
//     "Add Moonfire",
//     "Add Pounce",
//     "Add Bite",
//     "Add Wrath",
//     "Insert Claw 0",
//     "Swap Claw Moonfire",
//     "Remove Bite",
//     "Shuffle deck",
//     "Ready"]))

solve(["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
    "Add Pop",
    "Add Exodia",
    "Add Aso",
    "Remove Wrath",
    "Add SineokBqlDrakon",
    "Shuffle deck",
    "Insert Pesho 0",
    "Ready"])


