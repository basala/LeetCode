/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // Integer Newton
    // Xn+1 = Xn - f(Xn) / f'(Xn)
    if (x == 0) {
        return 0;
    }
    var res = x;
    while (res * res > x) {
        temp = (res + x / res) / 2;
        res = (res + x / res) / 2 | 0;
        console.log(res, temp);
    }
    return res;
}

// test
mySqrt(5);