## Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Example:
```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```
function maxNum(arr, n) {
    var len = arr.length;
    var cur = 0;
    var res = [];
    for (var i = 0; i < n; i++) {
        cur = arr.indexOf(Math.max(arr.slice(cur, len - n)));
        res.push(arr[cur]);
    }
    return res;
}