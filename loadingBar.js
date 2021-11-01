function loadingBar(number) {

    let input = number / 10;
    if (input === 10) {
        console.log(`100% Complete!\n[%%%%%%%%%%]`);
        return;
    }
    let result = '';
    let dots = '';
    for (let i = 0; i < input; i++) {
        result += `%`;

    }
    for (let k = input + 1; k <= 10; k++) {
        dots += ".";
    }
    console.log(`${number}% [${result}${dots}]\nStill loading...`);

}

loadingBar(80)