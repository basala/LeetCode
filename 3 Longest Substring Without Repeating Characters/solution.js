/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var cur = 0;
    var res = [];
    for (var i = 0; i < s.length; i++) {
        if (res.indexOf(s[i]) == -1) {
            cur++;
        } else {
            max = Math.max(max, cur);
            res = res.slice(res.indexOf(s[i]) + 1, res.length);
            cur = res.length + 1;
        }
        res.push(s[i]);
    }
    return Math.max(max, cur);
};