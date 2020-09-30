
function passwordStrength(pwd) {
    let variationCount = 4 - getVariationCount(pwd);
    let lengthDiff = 6 - pwd.length;
    let output = variationCount > lengthDiff ? variationCount : lengthDiff;
    return output;
}
function getVariationCount(pwd) {
    let variations = {
        digits: /\d/.test(pwd),
        lower: /[a-z]/.test(pwd),
        upper: /[A-Z]/.test(pwd),
        nonWords: /[!@#$%^&*()-+]/.test(pwd),
    }

    let variationCount = 0;
    for (let check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    return variationCount;
}
console.log(passwordStrength('Bb3'))
console.log(passwordStrength('A'))
console.log(passwordStrength('$@#%#@'))
console.log(passwordStrength('Sd@452'))
