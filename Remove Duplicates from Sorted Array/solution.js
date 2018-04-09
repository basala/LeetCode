/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        // console.log(i, nums.length, nums);
        if (nums[i] == nums[i - 1]) {
            nums.splice(i, 1);
            i -= 1;
        }
    }
    return nums.length;
};