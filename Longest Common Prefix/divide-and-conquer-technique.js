/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    }
    return divide_and_conquer_technique(strs, 0, strs.length - 1);
}

function divide_and_conquer_technique(strs, left, right) {
    if (left == right) {
        return strs[left];
    } else {
        let mid = Math.floor((left + right) / 2);
        let left_prefix = divide_and_conquer_technique(strs, left, mid);
        let right_prefix = divide_and_conquer_technique(strs, mid + 1, right);
        return common_prefix(left_prefix, right_prefix);
    }
}

function common_prefix(left_prefix, right_prefix) {
    let min = Math.min(left_prefix.length, right_prefix.length);
    for (let i = 0; i < min; i++) {
        if (left_prefix[i] != right_prefix[i]) {
            return left_prefix.substring(0, i);
        }
    }
    return left_prefix.substring(0, min);
}