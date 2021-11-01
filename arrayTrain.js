function data(input) {

    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift())
    for (let i = 0; i < input.length; i++) {

        let addPasangers = input[i].split(' ')

        if (addPasangers[0] == 'Add') {
            wagons.push(Number(addPasangers[1]))
        } else {
            let passangers = Number(addPasangers[0])
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passangers <= maxCapacity) {
                    wagons[i] += passangers
                    break;
                }
            }
        }

    }
    console.log(wagons.join(' '));
}



data(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])