/**
 * @param {number[]} nums
 * @return {number}
 * a algorithm with a time complex of O(n).
 */
var maxSubArray = function(nums) {
    var maxSoFar = nums[0];
    var maxEndingHere = nums[0];
    for (var i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}