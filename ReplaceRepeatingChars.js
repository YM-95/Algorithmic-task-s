function data(text) {

    let texts = text.split('')
    let res = []

    for (let i = 0; i < texts.length; i++) {
        if (texts[i] !== texts[i + 1]) {
            res.push(texts[i])
        }
    }
    console.log(res.join(''));
}

data('aaaaabbbbbcdddeeeedssaa')


function data(text) {

    let texts = text[0]


    for (let i = 1; i < text.length; i++) {
        if (text[i] != text[i - 1]) {
            texts += text[i]
        }
    }
    console.log(texts);
}


data('aaaaabbbbbcdddeeeedssaa')