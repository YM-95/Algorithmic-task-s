function bombNumbers(firstArr, secondArr) {
    let bombNum = secondArr[0];
    let rangeNum = secondArr[1];

    while (firstArr.includes(bombNum)) {
        let bombIndex = firstArr.indexOf(bombNum);
        let startIndex = bombIndex - rangeNum;
        let elementToRemove = rangeNum * 2 + 1;
        if (startIndex < 0) {
            elementToRemove -= bombIndex;
            startIndex = 0;
        }
        firstArr.splice(startIndex, elementToRemove);
    }
    let result = 0;
    for (let nums of firstArr) {
        result += nums;
    }
    console.log(result);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])