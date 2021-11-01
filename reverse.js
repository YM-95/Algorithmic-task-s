function data(input) {

    let newStr = ' '
    for (let i = input.length; i >= 0; i--) {

        let splitet = input.charAt(i)
        newStr += splitet

    }
    console.log(newStr);

}

data(1234)