/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    }
    var dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}