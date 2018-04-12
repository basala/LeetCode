/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * the algorithm cost too much time to complete all the tests.
 */
var strStr = function(haystack, needle) {
    if (haystack.length == 0 && needle.length == 0) {
        return 0;
    }
    for (var i = 0; i < haystack.length; i++) {
        var temp = i;
        var j = 0;
        while (j < needle.length && temp < haystack.length) {
            if (haystack[temp] != needle[j]) {
                break;
            }
            temp++
            j++;
        }
        if (j == needle.length) {
            return i;
        }
    }
    return -1;
};