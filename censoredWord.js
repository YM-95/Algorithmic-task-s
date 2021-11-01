

function data(string, word) {

    let text = string
    while (text.includes(word)) {
        text = string.replace(word, '*'.repeat(word.length))

    }
    console.log(text);
}




data('A small sentence with some words',
    'small')