function data(word, text) {

    let tolow = text.toLowerCase()
    let res = tolow.split(' ')
    let resul = []
    for (let key of res) {

        if (key == word) {
            resul.push(key)
        }
    }
    if (resul == 0) {
        console.log(`${word} not found!`);
    }
    console.log(resul.join());
}


data('python',
    'JavaScript is the best programming language')