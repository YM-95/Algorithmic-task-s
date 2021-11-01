function data(string, startIndex, count) {

    // We have to extract 1st char from string.

    let sub = string.substring(startIndex, startIndex + count)
    console.log(sub);
}


data('ASentance', 1, 8)