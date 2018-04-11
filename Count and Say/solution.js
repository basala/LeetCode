/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var str = '1';
    for (var i = 2; i <= n; i++) {
        str = str.replace(/(.)\1*/g, m => m.length + m[0])
    }
    return str;
};