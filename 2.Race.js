function data(input) {

    let namePatern = /[A-Za-z]/g
    let numPatern = /[0-9]/g
    let names = input.shift().split(', ')
    let obj = {}

    for (let name of names) {
        obj[name] = 0
    }
    while (input[0] != 'end of race') {

        let line = input.shift();
        let letters = line.match(namePatern)
        let numbers = line.match(numPatern);
        let name = letters.join('')
        let distance = numbers.map(Number);
        let totalDistance = 0
        for (let key of distance) {
            totalDistance += key
        }
        if (obj[name] != undefined) {
            obj[name] += totalDistance
        }

    }
    let sortet = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    if (sortet[0]) {
        console.log('1st place: ' + sortet[0][0]);
    }
    if (sortet[1]) {
        console.log('2nd place: ' + sortet[1][0]);
    }
    if (sortet[2]) {
        console.log('3rd place: ' + sortet[2][0]);
    }

}


data(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"])