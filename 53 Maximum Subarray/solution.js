/**
 * @param {number[]} nums
 * @return {number}
 * DP
 * maxSubArray(A, i) = maxSubArray(A, i - 1) > 0 ? maxSubArray(A, i - 1) : 0 + A[i];
 */
var maxSubArray = function(nums) {
    var dp = [];
    dp[0] = nums[0];
    var max = dp[0];
    for (var i = 1; i < nums.length; i++) {
        dp[i] = (dp[i - 1] > 0 ? dp[i - 1] : 0) + nums[i];
        max = Math.max(max, dp[i]);
    }
    // console.log(dp);
    return max;
};