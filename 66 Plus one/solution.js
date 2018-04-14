/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1; // 进位
    for (var i = digits.length - 1; i >= 0; i--) {
        if (carry == 1) {
            if (digits[i] < 9) {
                digits[i] += carry;
                carry = 0;
            } else {
                digits[i] = 0;
                carry = 1;
            }
        }
    }
    if (carry == 1) {
        digits.unshift(1);
    }
    return digits;
};