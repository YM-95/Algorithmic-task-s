function data(input) {

    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/

    let totalPrice = 0
    let productPrice = 0
    while (input[0] != 'end of shift') {
        let line = input.shift()
        let match = pattern.exec(line)
        if (match != null) {
            let [_, name, product, count, price] = match
            count = Number(count)
            price = Number(price)
            totalPrice += count * price
            console.log(`${name}: ${product} - ${Number(count * price).toFixed(2)}`);
        }




    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}


// data(["%George%<Croissant>|2|10.3$",
//     "%Peter%<Gum>|1|1.3$",
//     "%Maria%<Cola>|1|2.4$",
//     "end of shift"])

data(["%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"])