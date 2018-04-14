/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    var res = [];
    while (i >= 0 && j >= 0) {
        var temp = parseInt(a[i]) + parseInt(b[j]) + carry;
        console.log(temp);
        if (temp < 2) {
            res.unshift(temp);
            carry = 0;
        } else {
            res.unshift(temp - 2);
            carry = 1;
        }
        i--;
        j--;
    }
    console.log(res, i, j, carry);
    while (i >= 0) {
        var temp = parseInt(a[i]) + carry;
        console.log(temp);
        if (temp == 2) {
            res.unshift(0);
            carry = 1;
        } else {
            res.unshift(temp);
            carry = 0;
        }
        i--;
    }
    while (j >= 0) {
        var temp = parseInt(b[j]) + carry;
        console.log(temp)
        if (temp == 2) {
            res.unshift(0);
            carry = 1;
        } else {
            res.unshift(temp);
            carry = 0;
        }
        j--;
    }
    if (carry == 1) {
        res.unshift(1);
    }
    return res.join('');
};