function solve(input) {
    let journalList = input.shift().split(", ")
    let line = input.shift()

    while (line != 'Craft!') {
        let [command, item, newItem] = line.split(" - ")

        switch (command) {
            case 'Collect':
                collec(journalList, item)
                break;
            case 'Drop':
                drop(journalList, item)
                break;
            case 'Combine Item':
                combine(journalList, item, newItem)
                break;
            case 'Renew':
                renew(journalList, item)
                break;

        }
        line = input.shift()
    }

    function collec(list, item) {
        if (list.includes(item) == false) {
            list.push(item);
        }
    }

    function drop(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item)
            list.splice(index, 1)
        }
    }
    function combine(list, item, newItem) {
        let newItem = item.split(':')
        if (list.includes(item) == true) {
            let index = list.indexOf(item)
            list[index] = newItem
        }
    }
    function renew(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item)
            list.splice(index, 1);
            list.push(index)
        }
    }
    console.log(journalList.join(", "));
}



solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])

solve(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!'])