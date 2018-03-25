/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var INT_MAX = Math.pow(2, 31) - 1;
    if (x < 0 || x > INT_MAX) {
        return false;
    }
    var palidrone = 0;
    var origin = x;
    while (x > 0) {
        palidrone = palidrone * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return palidrone == origin;
}