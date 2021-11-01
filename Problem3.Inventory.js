function solve(input) {
    let list = input.shift().split(', ')

    for (let token of input) {
        let tokens = token.split(" - ")

        if (tokens[0] == 'Craft!') {
            console.log(list.join(', '));
            break;
        }
        if (tokens[0] == 'Collect') {
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
        if (tokens[0] == 'Combine Items') {
            let newItem = tokens[1].split(':')
            let index = list.indexOf(newItem[0]);
            if (list.includes(newItem[0]) == true) {
                list.splice(index + 1, 0, newItem[1])
            }
        }
        if (tokens[0] == 'Renew') {
            if (list.includes(tokens[1]) == true) {
                let index = list.indexOf(tokens[1]);
                list.splice(index, 1);
                list.push(tokens[1])
            }

        }

    }

}
solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
solve(['Iron, Sword', 'Collect - Iron', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!'])