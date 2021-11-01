function data(arr) {

    let first = Number(arr[0])
    let second = Number(arr[1]);
    let third = Number(arr[2]);
    let total = Number(arr[3])


    let pplServed = total;

    let timeNeeded = 0;

    while (pplServed > 0) {
        timeNeeded++;
        if (timeNeeded % 4 === 0) {
            continue;
        }
        pplServed -= first;

        pplServed -= second;

        pplServed -= third;
    }
    console.log(`Time needed: ${timeNeeded}h.`);
}


data([1, 2, 3, 45])
