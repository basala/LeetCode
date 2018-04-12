/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = {};
    for (let i = 0; i < nums.length; i++) {
        let tmp = target - nums[i];
        if (res[tmp] !== undefined) {
            return [res[tmp], i];
        }
        res[nums[i]] = i;
    }
    return [];
};

/**
 * Time complexity: O(n)
 */