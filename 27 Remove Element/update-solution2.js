/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    var n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[i - 1];
            n--;
        } else {
            i++;
        }
    }
    return n;
}