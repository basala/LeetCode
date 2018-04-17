/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var i = a.length - 1;
    var j = b.length - 1;
    var res = '';
    var carry = 0;
    while (i >= 0 || j >= 0) {
        var tempx = i >= 0 ? a[i] : 0;
        var tempy = j >= 0 ? b[j] : 0;
        var tempsum = parseInt(tempx) + parseInt(tempy) + carry;
        carry = Math.floor(tempsum / 2);
        res = tempsum % 2 + res;
        if (i >= 0) {
            i--;
        }
        if (j >= 0) {
            j--;
        }
    }
    if (carry > 0) {
        res = carry + res;
    }
    return res;
}