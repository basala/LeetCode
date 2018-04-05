/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    }
    let first_str = strs[0];
    for (let i = 0; i < first_str.length; i++) {
        let c = first_str[i];
        for (let j = 1; j < strs.length; j++) {
            if (i == strs[j].length || strs[j][i] != c) {
                return first_str.substring(0, i);
            }
        }
    }
    return first_str;
};