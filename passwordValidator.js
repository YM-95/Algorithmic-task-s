function passwords(password) {
    function isLengthBetweenSixAndTen(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;

        } else {
            return false;
        }

    }
    function ifConsistOnlyLettersAndDigits(string) {
        for (let i = 0; i < string.length; i++) {
            if (!(string[i].charCodeAt(0) >= 48 && string[i].charCodeAt(0) <= 57) && !(string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) && !(string[i].charCodeAt(0) >= 97 && string[i].charCodeAt(0) <= 122)) {
                return false;
            }

        }
        return true;
    }
    function ifHaveDigits(string) {
        let counter = 0;
        for (let i = 0; i < string.length; i++) {

            if (string[i].charCodeAt(0) >= 48 && string[i].charCodeAt(0) <= 57) {
                counter++;

            }
        }
        if (counter >= 2) {
            return true;
        } else {
            return false;
        }

    }

    let isLengthValid = isLengthBetweenSixAndTen(password);
    let isContainCharrOnly = ifConsistOnlyLettersAndDigits(password);
    let isHaveDigits = ifHaveDigits(password);

    if (isHaveDigits && isLengthValid && isContainCharrOnly) {
        console.log(`Password is valid`);
    }
    if (!isLengthValid) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (!isContainCharrOnly) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (!isHaveDigits) {
        console.log(`Password must have at least 2 digits`);
    }
}

passwords('logIn')