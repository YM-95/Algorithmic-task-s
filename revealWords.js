function data(word, string) {

    let splitWord = word.split(', ')
    let splitString = `${string}`

    for (let key of splitWord) {
        let match = `${'*'.repeat(key.length)}`
        key = `${key}`

        splitString = splitString.replace(match, key)

    }
    console.log(splitString);
}

data('great',
    'softuni is ***** place for learning new programming languages')