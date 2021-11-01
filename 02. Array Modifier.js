function solve(arr) {

    let integers = arr.shift().split(' ')

    for (let i = 0; i <= arr.length; i++) {

        let [command, a, b] = arr[i].split(' ')
        a = Number(a)
        b = Number(b)
        if (command == 'end') {
            console.log(integers.join(', '));
            break;
        }
        if (command == 'swap') {
            let swap = function (x) { return x }; integers[b] = swap(integers[a], integers[a] = integers[b])
        } else if (command == 'multiply') {
            integers[a] = integers[a] * integers[b]
        } else if (command == 'decrease') {
            for (let i = 0; i < integers.length; i++) {
                integers[i] = integers[i] - 1
            }
        }

    }
}

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
