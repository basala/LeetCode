/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var memo = [];
    return climb_Stairs(0, n, memo);
}

var climb_Stairs = function(i, n, memo) {
    console.log(i, memo, 'a');
    if (i > n) {
        console.log(1)
        return 0;
    }
    if (i == n) {
        console.log(2)
        return 1;
    }
    if (memo[i] > 0) {
        console.log(3)
        return memo[i];
    }
    memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
    console.log(i, memo, 'b');
    return memo[i];
}

climbStairs(4)