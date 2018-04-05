/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    }
    let first_str = strs[0];
    if (strs.length == 1) {
        return first_str;
    }
    for (let i = 0; i < first_str.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            prefix = first_str.substring(0, i + 1)
            if (strs[j].startsWith(prefix)) {
                // continue
            } else {
                return first_str.substring(0, i);
            }
        }
    }
    return first_str;
};