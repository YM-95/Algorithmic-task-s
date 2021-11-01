function data(arr) {

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let validNames = []
    while ((validName = regex.exec(arr)) !== null) {
        validNames.push(validName[0])
    }
    console.log(validNames.join(' '));
}


data(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov"])