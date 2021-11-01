function data(input) {

    let leng = input.length / 2
    let firstString = input.substring(0, leng)
    let lastString = input.substring(leng)

    let newString = firstString.split("").reverse().join("");
    let last = lastString.split("").reverse().join("");
    console.log(newString);
    console.log(last);
}

data('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')