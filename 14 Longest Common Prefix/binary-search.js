/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    }
    let minlen = Number.MAX_SAFE_INTEGER;
    for (let str of strs) {
        minlen = Math.min(minlen, str.length);
    }
    let low = 1;
    let high = minlen;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return strs[0].substring(0, (low + high) / 2);
}

var isCommonPrefix = function(strs, len) {
    let first_str = strs[0].substring(0, len);
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(first_str)) {
            return false;
        }
    }
    return true;
}