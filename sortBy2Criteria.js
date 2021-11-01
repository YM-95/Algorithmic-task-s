function data(input) {
    input.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);

        return firstCriteria || secondCriteria;

    });

    console.log(input.join(`\n`));
}

data(["alpha", "beta", "gamma"])
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function solve(input) {

    input = input.sort(compareLength);

    function compareLength(a, b) {
        if (a.length < b.length) {
            return a.length - b.length;
        } else if (a.length === b.length) {
            return a.localeCompare(b); // or return a>b
        } else if (a.length > b.length) {
            return a.length - b.length;
        }
    }
    // console.log(input.join(`\n`));

    for (let element of input) {
        console.log(element)
    }
}

solve(["alpha", "beta", "gamma"])

///////////////////////////////////////////////////
///////////////////////////////////////////////////
function solve(input) {
    input = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).forEach(element => console.log(element))
}
solve(["alpha", "beta", "gamma"])