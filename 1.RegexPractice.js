function data(arr) {

    let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d{1,})$/
    let total = 0
    let furniture = []
    while (arr[0] != 'Purchase') {
        let line = arr.shift();
        let match = pattern.exec(line);

        if (match != null) {
            let { name, price, qty } = match.groups
            price = Number(price);
            qty = Number(qty);
            total += price * qty
            furniture.push(name)
        }
    }
    console.log('Bought furniture:');
    for (let key of furniture) {
        console.log(key);
    }
    console.log("Total money spend: " + total.toFixed(2));

}

data([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"]
)