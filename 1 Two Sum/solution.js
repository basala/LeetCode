/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (nums[j] == (target - nums[i])) {
                return [i, j];
            }
        }
    }
    return [];
}

/**
 * Time Complexity: O(n^2)
 */