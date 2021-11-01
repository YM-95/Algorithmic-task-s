function solve(arr) {
    let del = arr.pop()
    arr.unshift(del)
    let totalPriceTaxes = 0
    let taxes = 0
    let totalPrice = 0
    for (let i = 1; i < arr.length; i++) {
        let priceEach = arr[i]
        if (Number(priceEach) < 0) {
            console.log("Invalid price!");
            continue;
        } else {
            totalPriceTaxes += Number(priceEach)
        }
    }
    taxes = totalPriceTaxes * 0.20

    totalPrice = totalPriceTaxes + taxes
    if (arr[0] == 'special') {
        totalPrice = totalPrice * 0.90

    } else if (arr[0] == 'regular') {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${totalPriceTaxes.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${totalPrice.toFixed(2)}$`);
    }
    if (totalPrice == 0) {
        console.log("Invalid order!");
    }
}

// solve(['1050', '200', '450', '2', '18.50', '16.86', 'special'])
solve(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular'])
// solve(['regular'])