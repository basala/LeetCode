/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 0) {
        return false;
    }
    if (x == 0) {
        return 0;
    }
    if (x <= 3) {
        return 1;
    }
    for (var i = 2; i <= Math.ceil(x / 2); i++) {
        if (i * i > x) {
            return i - 1;
        }
        if (i * i == x) {
            return i;
        }
    }
};