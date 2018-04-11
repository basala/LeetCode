/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var index = nums.indexOf(target);
    if (index != -1) {
        return index;
    }
    for (var i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            return i;
        }
    }
    return nums.length;
};