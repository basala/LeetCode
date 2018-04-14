/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var res = /\s*(\w+\s+)*(\w+)?/.exec(s);
    return res[2] === undefined ? (res[1] === undefined ? 0 : res[1].replace(/\s+/, '').length) : res[2].length;
};

/**
 * update-solution : more simple Regx
 * var lengthOfLastWord = function(s) {
 *     return s.trim().split(' ').pop().length;
 * };
 */