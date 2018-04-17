/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // time limit exceeded
    // Time complexity : O(2^n). Size of recursion tree will be 2^n.
    // Space complexity : O(n). The depth of the recursion tree can go upto n.
    return climb_Stairs(0, n);
};

function climb_Stairs(i, n) {
    if (i > n) {
        return 0;
    }
    if (i == n) {
        return 1;
    }
    return climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
}