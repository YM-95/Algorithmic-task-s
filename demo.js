function bombNumbers(numbs, specialNPower) {
    let result = [];

    let specialN = Number(specialNPower[0]); //4
    let powerOfSPecial = Number(specialNPower[1]); //2

    for (let i = 0; i < numbs.length; i++) {
        let numbsInArray = numbs[i]; //1, 2, 2, 4, 2, 2, 2, 9

        if (numbsInArray !== specialN) {

            result.push(numbsInArray);

        } else {

            numbs.splice(numbs.indexOf(specialN) + numbs.indexOf(powerOfSPecial), powerOfSPecial);

        }
    }
    //sum left elements
    console.log(result.join(' '));
}

bombNumbers([1, 8, 5, 4, 3, 1, 6, 9],
    [4, 2]);