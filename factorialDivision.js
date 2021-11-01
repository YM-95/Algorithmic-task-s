function factorial(numberOne, numberTwo) {

    let sumOne = 1;
    for (i = 1; i <= numberOne; i++) {
        sumOne *= i;
    }

    let sumTwo = 1;
    for (i = 1; i <= numberTwo; i++) {
        sumTwo *= i;
    }

    console.log((sumOne / sumTwo).toFixed(2));
}
factorial(5, 2)