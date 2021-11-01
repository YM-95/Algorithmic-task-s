function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let firstString = arr[i];
        let palindrome = [];
        if (firstString === arr[i + 1]) {

            palindrome.push(firstString);

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === arr[j + 1]) {
                    palindrome.push(arr[j]);
                } else {
                    palindrome.push(arr[j]);
                    break;
                }
            }

        }
        if (palindrome.length > result.length) {
            result = palindrome;
        }
    }
    console.log(result.join(` `));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);