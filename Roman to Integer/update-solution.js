/**
 * @param {string} s
 * @return {number}
 */
var romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
var romanToInt = function(s) {
    if (s.length < 1) {
        return null;
    }
    var result = 0;
    for (var i = 0; i < s.length - 1; i++) {
        if (romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
            console.log(romanNumerals[s[i]], romanNumerals[s[i + 1]], 'a')
            result -= romanNumerals[s[i]];
        } else {
            console.log(romanNumerals[s[i]], romanNumerals[s[i + 1]], 'b')
            result += romanNumerals[s[i]];
        }
    }
    result += romanNumerals[s[s.length - 1]];
    return result;
};