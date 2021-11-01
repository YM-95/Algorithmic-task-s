function solve(input) {
    let targets = input.shift().split(' ').map(Number)
    let index = input.shift()
    while (index != 'End') {
        let [cmd, indexCommand, power] = index.split(' ')
        switch (cmd) {
            case 'Shoot':
                if (indexCommand <= targets.length - 1) {
                    targets[indexCommand] -= power

                }
                if (targets[indexCommand] <= 0) {
                    targets.splice(indexCommand, 1)
                }
                break;
            case 'Strike':
                let radius = Number(power)
                let indexNumber = Number(indexCommand)
                let strikeStart = indexNumber - radius
                let strikeEnd = indexNumber + radius
                if (strikeStart >= 0 && strikeEnd <= targets.length - 1) {
                    let end = radius * 2 + 1
                    targets.splice(strikeStart, end)
                }
                else {
                    console.log(`Strike missed!`)
                }
                break;
            case 'Add':
                let indexValue = Number(indexCommand)
                let value = Number(power)
                if (indexValue > targets.length - 1 || indexValue < 0) {
                    console.log('Invalid placement!')
                }
                else {
                    targets.splice(indexValue, 0, value)
                }
        }
        index = input.shift()
    }
    console.log(targets.join('|'))
}
