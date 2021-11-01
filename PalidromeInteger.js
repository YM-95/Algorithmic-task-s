function data(input) {
    for (let i = 0; i < input.length; i++) {
        let number = input[i] + "";
        let reverse = number.split(``).reverse().join(``);

        if (Number(reverse) % Number(number) === 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}

data([123, 323, 421, 121])



function data(input) {
    for (let i = 0; i < input.length; i++) {
        let number = input[i] + "";
        let reverse = number.split(``).reverse().join(``);

        if (Number(reverse) === Number(number)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}