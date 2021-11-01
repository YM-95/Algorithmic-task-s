function data(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Number(arr[i]) + Number(arr[j]) === num) {
                console.log(arr[i], arr[j]);
            }

        }
    }
}
data([14, 20, 60, 13, 7, 19, 8], 27);