function data(text, search) {

    let splitText = text.split(' ')
    let count = 0
    for (let key of splitText) {
        if (key == search) {
            count++
        }
    }
    console.log(count);
}


data('This is a word and it also is a sentence', 'is')