function data(text) {
    let regEx = /[a-zA-Z]/;
    let splitText = text.split(' ')
    let result = []
    for (let key of splitText) {
        if (key.charAt(0) == '#') {
            if (regEx.test(key.charAt(1)) == true) {
                result.push(key)
            }

        }
    }
    for (let i = 0; i < result.length; i++) {
        let end = result[i].split('')
        end.shift()
        console.log(end.join(''));
    }
}

data('Nowadays everyone uses # to tag a #special word in #socialMedia')