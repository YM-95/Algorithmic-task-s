function data(arr) {
    let num = []
    let counter = 1
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == 'add') {
            num.push(counter)
            counter++
        } else if (arr[i] == 'remove') {
            num.pop(counter)
            counter++
        }
    }
    if (num.length <= 0) {
        console.log('Empty');
    }
    console.log(num.join(' '));
}


data(['add', 'add', 'remove', 'add', 'add'])