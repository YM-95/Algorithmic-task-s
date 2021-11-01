function solve(input) {

    let words = input.shift().split(' ')
    let countFirst = 0
    let countSecond = 0;
    let newArr = []

    for (let token of input) {
        if (words[0] == token) {
            countFirst++
        } else if (words[1] == token) {
            countSecond++
        }

    }
    console.log(`this - ${countFirst}`);
    console.log(`sentence - ${countSecond}`);
}



solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])